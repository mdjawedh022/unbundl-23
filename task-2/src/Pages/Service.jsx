import React, { useEffect, useState } from 'react'
import "../styles/Service.css";
import Hero from '../components/Hero';
import img4 from "../image/1.jpg"
import ProductList from '../components/ProductList';
 const Service = () => {


  const [isloading,setIsloading]=useState(false)
const [choco,setChoco]=useState([]);


// ----------Data fetching and render----------
useEffect(() => {
    const url = "https://chocolates-8z1x.onrender.com/chocolates";

    const fetchData = async () => {
        setIsloading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setIsloading(false);
        console.log(data);
        setChoco(data)
      } catch (error) {
        setIsloading(true);
        console.log("error", error);
      }
    };

    fetchData();
}, []);
if(isloading){
 return(
  <h1>...Loading</h1>
 )
}
  return (
    <div>
        <Hero
       cName="hero-service"
       heroImage={img4}
       title="Choose your Favourite chocolates"
  
      />
      {/* <Recent/> */}

      <div className="data-card">
        {
          choco.map((el)=>(
            <ProductList key={el.id} {...el}/>
          ))
        }
      </div>
    </div>
  )
}

export default Service
