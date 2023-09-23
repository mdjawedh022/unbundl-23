import React from 'react'
import "../styles/Service.css";
import axios from "axios";
const ProductList = (props) => {
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
    window.location="/service"
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
