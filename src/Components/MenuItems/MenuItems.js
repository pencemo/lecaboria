import React, {useEffect, useState, useContext} from 'react'
import './MenuItems.css'
import { Container } from 'react-bootstrap'
import { FirebaseContext } from '../../Context/Context';
import Loading from '../Loading/Loading';

function MenuItems() {



  const [menu, setMenu] =useState([]);
  const {firebase} =useContext(FirebaseContext)
  const [loading, setLoading]=useState(false)

  useEffect(()=>{
    firebase.firestore().collection('menu').get().then((snapshot)=>{
      const allMenu =snapshot.docs.map((product)=>{
        return{
          ...product.data(),
          id:product.id
        }
      })
      setMenu(allMenu)
      setLoading(true)
    })
  })
  return (
    <div>
      <div className="menuHead">
        <h4>Our Delicious</h4>
        <h1>Food Menu</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam soluta voluptas nostrum. Quos commodi fugit ullam libero nesciunt velit rerum illum provident tenetur, suscipit distinctio hic est. Distinctio, ab.</p>
      </div>

    
      <div className="menuitems">
        {loading ? <Container className='menubox'>
        {menu.map(product=>{

          return <div className="box">
                  <img src={product.url} alt="" />
                  <h1>{product.name}</h1>
                  <p>{product && product.discription}</p>
                  <h4 className='fonts'>$ {product.price}</h4>
            </div>
            }
          )}
        </Container> : <Loading></Loading>}
      </div>
      
    </div>
  )
}

export default MenuItems
