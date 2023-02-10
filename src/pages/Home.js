import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'bootstrap';

//creating object for storing the information of user by hooks

 


export default function Home() {

    const [users,setUser]=useState([])  //as initial state is empty array

    const {id} = useParams();
 useEffect(()=>{
    loadUsers()
 },[])              //runs one on pageload otherwise without [] runs unlimited times

  const loadUsers =async () =>{
    const result=await axios.get("http://localhost:9114/users")
    setUser(result.data)   

       // ?????  console.log(result.data)      
   }

   const deleteUser = async(id)=>{
    await axios.delete(`http://localhost:9114/user/${id}`);
    loadUsers();


   }

  return (
    <div className='container'>
    <div className='py-4'>

    <table className="table border shadow" >
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

  {
    users.map((user,index)=>(    //map create array on calling time 
        <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      
        <td>  
            <Link to={`/viewuser/${user.id}`} id="buttonhome" className="btn btn-outline-primary" >View</Link>
            <Link to={`/edituser/${user.id}`} id="buttonhome" className="btn btn-outline-success">Edit</Link>
            <button onClick={()=>deleteUser(user.id)} id="buttonhome" className="btn btn-outline-danger">Delete</button>
            
        </td>
     

    </tr>

    ))
  }
   
   
  </tbody>
</table>
    </div>
    </div>
  )
}
