import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default function Header() {
  return (
    <div style={{width:"100%", height:"50px", backgroundColor:"steelblue",display:"flex",justifyContent:"space-between",alignItems:"center",paddingInline:"20px"}}>
      <h3>TeamList</h3>
      <div style={{width:"15%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <span><Link to="/" style={{fontSize:"20px",fontWeight:"bolder",color:"whitesmoke"}}>Home</Link></span>
        <span ><Link to="/about" style={{fontSize:"20px",fontWeight:"bolder",color:"whitesmoke"}}>About</Link></span>
      </div>
    </div>
  )
}
