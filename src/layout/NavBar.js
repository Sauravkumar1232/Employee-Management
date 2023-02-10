//1 rfc=react functional component


import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>Employee Management System</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
   
   {/* <button  className="btn btn-outline-light">Add </button> */}
    
    
    <Link className="button" to={"/adduser"} > Add Employee</Link> 
    {//CREATING A BUTTON IN TO ROUTER BY LINK
    }
    </div>
  
</nav>
      
    </div>
  )
}
