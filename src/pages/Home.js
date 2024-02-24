import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'bootstrap';

//creating object for storing the information of user by hooks

 


export default function Home() {

    const [users,setUser]=useState([])          
                                                //useState is React Hook that allows you to add state to a functional component. 
                                                // It returns an array with two values: the current state and a function to update it.
                                                //  The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called

    const {id} = useParams();
    useEffect(()=>{        // fetching data
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
    alert(`Employee ${id} deleted.`);


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
      {/* <th scope="col"></th> */}
      <th scope="col">Phone </th>
      <th> Age</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>

  {
    users.map((user,index)=>(    //map create array on calling time 
        <tr >
      {/* <th scope="row" key={index}>{index+1}</th> */}
      <th>{user.id}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>

      <td>{user.phone}</td>
      <td>{user.age}</td>
      
        <td >  
            <Link to={`/viewuser/${user.id}`} id="buttonhome" className="btn btn-outline-primary" >View</Link>
             <Link to={`/edituser/${user.id}`} id="buttonhome" className="btn btn-outline-success">Edit</Link> 
            <button  onClick={()=>deleteUser(user.id)} id="buttonhome" className="btn btn-outline-danger">Delete</button>
            
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
