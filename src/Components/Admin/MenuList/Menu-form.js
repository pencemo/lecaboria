import React, {useState, useContext} from 'react'
import './Menu-form.css'
import { X } from 'lucide-react';
import {FirebaseContext} from '../../../Context/Context'

function Menuform(props) {
  const open =(()=>{
    props.data2(!props.data)
  })

  const {firebase} = useContext(FirebaseContext)
  // const {user} = useContext(AuthContext)

  const [name,setName] =useState('');
  const [category,setCategory] =useState('');
  const [price,setPrice] =useState('');
  const [discription,setDiscription] =useState('');
  const [image,setImage] =useState('');
  const date = new Date()
  const handleSubmit =()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url);
        firebase.firestore().collection("menu").add({
          name,
          category,
          price,
          url,
          discription,
          createdAt:date.toDateString()
        })
      })
    })
    props.data2(!props.data)
  }
  return (
    <div className='menuForm'>
      <div action="" className="formgrid" >
        <h1>Add Food Menu</h1>
        <X className='x-mark' strokeWidth={1} size={30} onClick={open} />

          <label htmlFor="">Food Name</label>
          <input type="text" placeholder='Food name' onChange={(e)=> setName(e.target.value)} />
          <label htmlFor="">Category</label>
          <input type="text" placeholder='Category' onChange={(e)=> setCategory(e.target.value)} />
          <label htmlFor="">Price</label>
          <input type="number" placeholder='Price' onChange={(e)=> setPrice(e.target.value)} />
          <label htmlFor="">Discription</label>
          <input type="text" placeholder='Discription' onChange={(e)=> setDiscription(e.target.value)} />
          <label htmlFor="">Image</label>
          <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} />
          
          <button  className='menu-add' type='submit' onClick={handleSubmit}>Add Product</button>
        
      </div>
      <div className="background" onClick={open}></div>
    </div>
  )
}

export default Menuform
