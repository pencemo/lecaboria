import React, {useState, useContext, useEffect} from 'react'
import './MenuList.css'
import Menuform from './Menu-form';
import { Container } from 'react-bootstrap';
import { Plus, Trash2, SquarePen } from 'lucide-react';
import { FirebaseContext } from '../../../Context/Context';
import Loading from '../../Loading/Loading';
import { Table } from "flowbite-react";
import { Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";


function MenuItems() {
  const [openForm, setOpenFotm]=useState(false);
  const open =(()=>{
    setOpenFotm(!openForm)
  })

  const {firebase} =useContext(FirebaseContext)
  const [menulist, setMenuList]=useState([])
  const [loading, setLoading]=useState(false)
  const [deletnot, setdeletnot]=useState(false)

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
    setdeletnot(true)
    setTimeout(()=>{
      setdeletnot(false)
    }, 4000)
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
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Product Name</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Delete</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
              {menulist.map(menu=>{
            

            return<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={menu.name}>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {menu.name}
                  </Table.Cell>
                  <Table.Cell>{menu.createdAt}</Table.Cell>
                  <Table.Cell>{menu.category}</Table.Cell>
                  <Table.Cell>{menu.price}</Table.Cell>
                  <Table.Cell>
                    <span  className="font-medium gap-2 text-blue-800 hover:underline dark:text-cyan-500 flex items-center justify-center">
                      Edit <SquarePen size={22} strokeWidth={1} />
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span  className="font-medium gap-2 text-blue-800 hover:underline dark:text-cyan-500 flex items-center justify-center" onClick={()=>deleteMenu(menu.name)}>
                      Delete <Trash2 size={22} strokeWidth={1} />
                    </span>
                  </Table.Cell>
                </Table.Row>
                })
              }
              </Table.Body>
            </Table>
          </div>
            {/* <div className="listwrap" key={menu.name}>
              <h1>{menu.name}</h1>
              <h1>${menu.price}</h1>
              <h1>{menu.category}</h1>
              <div className="edit-btns">
              <button className='menu-edit' >Edit <SquarePen strokeWidth={1} size={23} /></button>
              <button className='menu-edit' onClick={()=>deleteMenu(menu.name)} dataId={menu.id}>Deletet <Trash2 strokeWidth={1} size={23} /></button>
              </div>
            </div> */}
          
          
        </div> : <Loading />}
      </Container>
      {deletnot && <Toast className=' position-absolute right-10 bottom-10 '>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
        <Toast.Toggle />
      </Toast>}

      {openForm && <Menuform data={openForm} data2={setOpenFotm} />}
    </div>
  )
}

export default MenuItems
