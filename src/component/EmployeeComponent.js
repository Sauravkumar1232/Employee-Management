import React, { useEffect, useState } from "react";
import { createEmployee, getEmployee, updateEmp, updateEmployee } from "../service/EmployeeServce";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EmployeeComponent = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');

  useState({
    name: '',
    userName:'',
    email:'',
    age:'',
    phone:''
  })

  // const [employee, setEmployee] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  //   phone: "",
  //   age:""
  // });

  
  const navigator = useNavigate();
  const {id} = useParams();

  // useEffect(() => {
  //    axios.get(`http://localhost:8081/employee/getById/${id}`).then((response)=>{
  //     console.log(response.data)
  //     setName(response.data.name);
  //     setUserName(response.data.userName);
  //     setEmail(response.data.email);
  //     setAge(response.data.age);
  //     setPhone(response.data.phone);
  //    });
  // }, []);

  useEffect(()=>{
    loadUser()
  },[])
  
  const loadUser = async () => {
    const response = await fetch(`http://localhost:8081/employee/getById/${id}`);
    const data1=await response.json();
   
    // console.log(axios.get(`http://localhost:8081/employee/getById/${id}`))
    setName(data1.data.name);
    setUserName(data1.data.userName);
    setEmail(data1.data.email);
    setAge(data1.data.age);
    setPhone( data1.data.phone);
  };


//   console.log(getEmployee(id).then(response=>{
//     setName(response.data.name);
//     setUserName(response.data.userName);
//     setEmail(response.data.email);
//     setAge(response.data.age);
//     setPhone(response.data.phone);
//   }))

//   useEffect(() => {

    
//     if(id){
//         getEmployee(id).then((response) => {
//             setName(response.data.name);
//             setUserName(response.data.userName);
//             setEmail(response.data.email);
//             setAge(response.data.age);
//             setPhone(response.data.phone);
//         }).catch(error => {
//             console.error(error);
//         })
//     }

// }, [id])

  // function handleName(e) {
  //   setName(e.target.value);
  // }
  // const handleName = (e) =>{
  //   setName(e.target.value)
  // } 

  // const handleName =(e) =>setName(e.target.value)
  // function handleUserName(e) {
  //   setUserName(e.target.value);
  // }
  // function handleEmail(e) {
  //   setEmail(e.target.value);
  // }
  // function handlePhone(e) {
  //   setPhone(e.target.value);
  // }
  // function handleAge(e) {
  //   setAge(e.target.value);
  // }
  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    const employee = { id,name, userName, email, phone, age };
    console.log(employee);
    if(id){
    updateEmployee(id,employee).then(response=>{
      console.log(response)
            navigator('/getAll')
     })
    .catch(error => {       
        console.error(error);
    })
    }else{
      createEmployee(employee).then((response)=>{
        console.log(response.data);
        navigator('/getAll');
      })  
    }
 
  }

  function pageTitle(){
    if(id){
      return   <h2 className="text-center">Edit Employee </h2> 
    }else{
      return   <h2 className="text-center">Add Employee </h2>
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {/* <h2 className="text-center">Add Employee </h2> */}
         {
          pageTitle()
         } 
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Employee User Name </label>
                <input
                  type="text"
                  placeholder="Enter User Name"
                  name="userName"
                  value={userName}
                  className="form-control"
                  onChange={(e)=>setUserName(e.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Employee Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={email }
                  className="form-control"
                  onChange={(e)=>setEmail(e.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Employee Phone</label>
                <input
                  type="phone"
                  placeholder="Enter Phone"
                  name="phone"
                  value={ phone }
                  className="form-control"
                  onChange={(e)=>setPhone(e.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Employee Age</label>
                <input
                  type="number"
                  placeholder="Enter Age"
                  name="age"
                  value={ age }
                  className="form-control"
                  onChange={(e)=>setAge(e.target.value)}
                ></input>
              </div>
              <button className="btn btn-success" onClick={saveOrUpdateEmployee}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;


// import React, { useState, useEffect } from 'react'
// import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeServce'
// import { useNavigate, useParams } from 'react-router-dom';

// import React, { useEffect, useState } from "react";
// import { createEmployee, getEmployee, updateEmployee } from "../service/EmployeeServce";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// const EmployeeComponent = () => {
//     const [employee, setEmployee] = useState({
//         id:"",
//         name: "",
//         userName: "",
//         email: "",
//         phone: "",
//         age:""
//       })

//     const {id} = useParams();
//     const [errors, setErrors] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone:'',
//         age:''
//     })

//     const navigator = useNavigate();

//     useEffect(()=>{
//         fetchUser();
//       },[])

//       const fetchUser=async()=>{
//         try{
//     const res=await fetch(`http://localhost:8081/employee/getById/`+id);
//     const data1=await res.json();
//     setEmployee(data1.data)
//     console.log(data1)
//         }catch(e){
//           console.error(e)
//         }
//       }

//     function saveOrUpdateEmployee(e){
//         e.preventDefault();

//         if(validateForm()){

//             const employee = {name, userName, email,phone,age}
//             console.log(employee)

//             if(id){
//                 updateEmployee(id, employee).then((response) => {
//                     console.log(response.data);
//                     navigator('/getAll');
//                 }).catch(error => {
//                     console.error(error);
//                 })
//             } else {
//                 createEmployee(employee).then((response) => {
//                     console.log(response.data);
//                     navigator('/getAll')
//                 }).catch(error => {
//                     console.error(error);
//                 })
//             }
//         }
//     }

//     function validateForm(){
//         let valid = true;

//         const errorsCopy = {... errors}

//         if(name.trim()){
//             errorsCopy.name = '';
//         } else {
//             errorsCopy.name = 'First name is required';
//             valid = false;
//         }

//         if(userName.trim()){
//             errorsCopy.userName = '';
//         } else {
//             errorsCopy.userName = 'Last name is required';
//             valid = false;
//         }

//         if(email.trim()){
//             errorsCopy.email = '';
//         } else {
//             errorsCopy.email = 'Email is required';
//             valid = false;
//         }

//         setErrors(errorsCopy);
        
//         return valid;

//     }

//     function pageTitle(){
//         if(id){
//             return <h2 className='text-center'>Update Employee</h2>
//         }else{
//             return <h2 className='text-center'>Add Employee</h2>
//         }
//     }
//   return (
//     <div className='container'>
//         <br /> <br />
//         <div className='row'>
//             <div className='card col-md-6 offset-md-3 offset-md-3'>
//                {
//                     pageTitle()
//                }
//                 <div className='card-body'>
//                     <form>
//                         <div className='form-group mb-2'>
//                             <label className='form-label'>First Name:</label>
//                             <input
//                                 type='text'
//                                 placeholder='Enter Employee First Name'
//                                 name='name'
//                                 value={employee.name}
//                                 className={`form-control ${ errors.name ? 'is-invalid': '' }`}
//                                 onChange={(e) => setName(e.target.value)}
//                             >
//                             </input>
//                             { errors.name && <div className='invalid-feedback'> { errors.name} </div> }
//                         </div>

//                         <div className='form-group mb-2'>
//                             <label className='form-label'>User Name:</label>
//                             <input
//                                 type='text'
//                                 placeholder='Enter Employee Last Name'
//                                 name='userName'
//                                 value={employee.username}
//                                 className={`form-control ${ errors.userName ? 'is-invalid': '' }`}
//                                 onChange={(e) => setUserName(e.target.value)}
//                             >
//                             </input>
//                             { errors.userName && <div className='invalid-feedback'> { errors.userName} </div> }
//                         </div>

//                         <div className='form-group mb-2'>
//                             <label className='form-label'>Email:</label>
//                             <input
//                                 type='text'
//                                 placeholder='Enter Employee Email'
//                                 name='email'
//                                 value={employeeemail}
//                                 className={`form-control ${ errors.email ? 'is-invalid': '' }`}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             >
//                             </input>
//                             { errors.email && <div className='invalid-feedback'> { errors.email} </div> }
//                         </div>
//                         <div className='form-group mb-2'>
//                             <label className='form-label'>Phone:</label>
//                             <input
//                                 type='number'
//                                 placeholder='Enter Employee Phone'
//                                 name='phone'
//                                 value={phone}
//                                 className={`form-control ${ errors.phone ? 'is-invalid': '' }`}
//                                 onChange={(e) => setPhone(e.target.value)}
//                             >
//                             </input>
//                             { errors.phone && <div className='invalid-feedback'> { errors.phone} </div> }
//                         </div>
//                         <div className='form-group mb-2'>
//                             <label className='form-label'>Age:</label>
//                             <input
//                                 type='text'
//                                 placeholder='Enter Employee Age'
//                                 name='age'
//                                 value={age}
//                                 className={`form-control ${ errors.age ? 'is-invalid': '' }`}
//                                 onChange={(e) => setAge(e.target.value)}
//                             >
//                             </input>
//                             { errors.age && <div className='invalid-feedback'> { errors.age} </div> }
//                         </div>

//                         <button className='btn btn-success' onClick={saveOrUpdateEmployee} >Submit</button>
//                     </form>

//                 </div>
//             </div>

//         </div>

//     </div>
//   )
// }

// export default EmployeeComponent
// // export default saveOrUpdateEmployee()