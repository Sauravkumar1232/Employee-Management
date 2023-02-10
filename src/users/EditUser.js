//npm i react-router-dom 

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom';




export default function EditUser() {

 let navigate = useNavigate();    //to navigate to the hoem page

    const {id}= useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

   const onInputChange = (e) => {
     setUser({ ...user, [e.target.name]: e.target.value });
  //   //console.log(user);
   };

   useEffect(()=>{
    loadUser()
   },[])

  const onSubmit = async (e) => {
    e.preventDefault();  //on url not showing extra data 
    //await axios.post("http://localhost:9114/user", user);
    await axios.put(`http://localhost:9114/user/${id}`,user);
    navigate("/");
  };

  const loadUser = async () =>{
    const result=await axios.get(`http://localhost:9114/user/${id}`);
    setUser(result.data);
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h3 className='text-center m-4'> Edit Employee</h3>

                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor="Name" className='form-lable'>Name</label>
                    <input type="text" name="name" id="name" className='form-control' placeholder='Enter your name' value={name}   onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="Username" className='form-lable'>Username</label>
                    <input type="text" name="username" id="username" className='form-control' placeholder='Enter your username' value={username} onChange={(e)=>onInputChange(e)}  />
                </div>

                <div className='mb-3'>
                    <label htmlFor="Email" className='form-lable'>Email</label>
                    <input type="text" name="email" id="email" className='form-control' placeholder='Enter your Email' value={email} onChange={(e)=>onInputChange(e)} />
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link to={"/"} className='btn btn-outline-danger'>Cancel</Link>
            
                </form>
            </div>


        </div>
     
    </div>
  )
}