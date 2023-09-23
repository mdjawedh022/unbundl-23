import React from 'react'
import "../styles/Recent.css"
import { useNavigate } from 'react-router-dom'
const RecentData = (props) => {

  const navigate=useNavigate()
 const handleservice=()=>{
  navigate("/service")
 }
  return (
  <div className="recent-card">
    <div className="recent-img">
      <img src={props.image} alt="" />
    </div>
    <h4 onClick={handleservice}>{props.heading}</h4>
   
  </div>
  )
}

export default RecentData
