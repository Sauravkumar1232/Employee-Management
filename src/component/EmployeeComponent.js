import React, { useEffect, useState } from "react";
import { createEmployee, getEmployee } from "../service/EmployeeServce";
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

  useEffect(() => {
     axios.get(`http://localhost:8081/employee/getById/${id}`).then((response)=>{
      console.log(response.data)
      setName(response.data.name);
      setUserName(response.data.userName);
      setEmail(response.data.email);
      setAge(response.data.age);
      setPhone(response.data.phone);
     });
  }, []);

  
  const loadUser = async () => {
    const response = axios.get(`http://localhost:8081/employee/getById/${id}`);
    // console.log(axios.get(`http://localhost:8081/employee/getById/${id}`))
    setName(response.data.name);
    setUserName(response.data.userName);
    setEmail(response.data.email);
    setAge(response.data.age);
    setPhone(response.data.phone);
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
    const employee = { name, userName, email, phone, age };
    console.log(employee);
    if(employee.id){
      updateEmployee(employee.id).then((response)=>{
          console.log(response.data);
          navigator('/getAll');
        }).catch.error(error);
    }else{
      createEmployee(employee).then((response)=>{
        console.log(response.data);
        navigator('/getAll');
      }).catch.error(error);
    }


    createEmployee(employee).then((response)=>{
      console.log(response.data);
      navigator('/getAll')
    })
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
                <label className="form-label">Employee Name</label>
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
