import React from 'react'
import "../styles/Service.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ProductList = (props) => {
  const navigate=useNavigate()
const {id,image,name,price,qty}=props;

const handlecart=(id)=>{
    console.log(id)
    const payload={
        id,image,name,price,qty
    }
    // handlepost(id)
axios.post(`https://chocolates-8z1x.onrender.com/cart`,payload).then(({data})=>{
    console.log(data);
    alert('Add successful in card 😊')
    navigate("/cart")
}).catch((err)=>{
    console.log(err);
})
}

  return (
    <div className='datacard'>
        <div  className='data-img' >
      <img src={image} alt=""/>
      </div>
    <h4>{name}</h4>
    <p>${price}</p>
    <button onClick={()=>handlecart(id)}>Add Cart</button>
    </div>
  )
}

export default ProductList
