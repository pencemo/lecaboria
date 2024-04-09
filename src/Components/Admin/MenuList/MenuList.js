import React, {useState, useContext, useEffect} from 'react'
import './MenuList.css'
import Menuform from './Menu-form';
import { Container } from 'react-bootstrap';
import { Plus, Trash2, SquarePen } from 'lucide-react';
import { FirebaseContext } from '../../../Context/Context';
import Loading from '../../Loading/Loading';



function MenuItems() {
  const [openForm, setOpenFotm]=useState(false);
  const open =(()=>{
    setOpenFotm(!openForm)
  })

  const {firebase} =useContext(FirebaseContext)
  const [menulist, setMenuList]=useState([])
  const [loading, setLoading]=useState(false)

  useEffect(()=>{
    firebase.firestore().collection('menu').get().then((snapshot)=>{
      const allMenu =snapshot.docs.map((menu)=>{
        return{
          ...menu.data(),
          id:menu.id
        }
      })
      setMenuList(allMenu)
      setLoading(true)
    })
  })

  const deleteMenu = async(name) => {
    // const [dltMenu, setDltMenu]=useState('')
    // setDltMenu(dataId)
    // const menuid = 'Fish moli'
    firebase.firestore().collection("menu").where("name", "==", name).get()
    .then(querySnapshot => {
        querySnapshot.docs[0].ref.delete();
    });
    // console.log(id);
  }
  return (
    <div className='menulist'>
      <Container>
        <div className="menuHeder">
          <h1>Menu List</h1>
          <button className='menu-add' onClick={open}>Add Product <Plus size={22} strokeWidth={1} /></button>
        </div>
        <div className="lineBorder"></div>
        {loading ? <div className="itemList">
          {menulist.map(menu=>{
            

            return<div className="listwrap" key={menu.name}>
              <h1>{menu.name}</h1>
              <h1>${menu.price}</h1>
              <h1>{menu.category}</h1>
              {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, voluptatem?</p> */}
              <div className="edit-btns">
              <button className='menu-edit' >Edit <SquarePen strokeWidth={1} size={23} /></button>
              <button className='menu-edit' onClick={()=>deleteMenu(menu.name)} dataId={menu.id}>Deletet <Trash2 strokeWidth={1} size={23} /></button>
              </div>
            </div>
          })
          }
        </div> : <Loading />}
      </Container>

      {openForm && <Menuform data={openForm} data2={setOpenFotm} />}
    </div>
  )
}

export default MenuItems
