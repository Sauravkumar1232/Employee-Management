import React, { useEffect, useParams } from "react";
import { useState } from "react";
import { deleteEmployee, listOfemp } from "../service/EmployeeServce";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Await } from "react-router-dom";
import UserData from "./UserData";

  const ListOfEmployee = () => {
    const [employees, setEmployees] = useState([{
      name: '',
      userName: '',
      email: '',
      phone:'',
      age:''
  }])
  // const {id}=useParams();
  const navigator = useNavigate();
  useEffect(() => {
  getAllEmp();
  }, [])

  const getAllEmp =async()=>{
    const res=await fetch("http://localhost:8081/employee/getAll")
    const data1= await res.json();
    console.log(data1.data)
    setEmployees(data1.data)
  }
   
 

  function viewEmp(id){
    navigator(`/view/${id}`)


  }
  

 
 

  

  function addNewEmployee() {
    navigator("/save");
  }
  // function removeEmployee(id){
  //   console.log(id)
  //   deleteEmployee(id).then(res=>{
  //     getAllEmp();
  //   }).catch(error=>{
  //     console.log(error);
  //   })
  //   // deleteEmployee(id);
  //   // navigator('/getAll')
  // }


  const dummydata = [
    {
      id: 1,
      name: "Saurav",
      userName: "string",
      email: "string@gmail",
      phone: "12345789",
      age: 22,
    },
    {
      id: 2,
      name: "string",
      userName: "string",
      email: "string",
      phone: "string",
      age: 20,
    },
    {
      id: 3,
      name: "samsung",
      userName: "sam user",
      email: "sam@gmail",
      phone: "123464",
      age: 120,
    },
    {
      id: 4,
      name: "fdsa",
      userName: "strygtfrdsing",
      email: "stringgfds",
      phone: "stri5432ng",
      age: 22,
    },
    {
      id: 5,
      name: "fdsa",
      userName: "strygtfrdsing",
      email: "stringgfds",
      phone: "stri5432ng",
      age: 22,
    },
    {
      id: 6,
      name: "",
      userName: "",
      email: "",
      phone: "",
      age: null,
    },
  ];

    function removeEmployee(id){
 
     fetch(`http://localhost:8081/employee/delete/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      getAllEmp();
      result.json().then((res)=>{
        console.warn(res)
      })
    })
    // ressult=await ressult.json();
    // console.warn(res)
    // deleteEmployee(id).then((response) =>{
    //     getAllEmp();
    // }).catch(error => {
    //     console.error(error);
    // })
}

 
  function updateEmployee(id) {
    navigator(`/viewuser/${id}`);
  }
  return (
    <div className="container">
      <br />
      <h2 className="text-center">List Of Employee</h2>
      <button type="button" className="btn btn-outline-primary" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered table-danger">
        <thead>
         <tr>
            <th>Id</th>
            <th>Employee Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
       
          {/* <UserData employees={employees}/> */}
          {
                    employees.map((employee,id) => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.userName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.age}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                    style={{marginLeft: '10px'}}
                                >Delete</button>
                                  <button className='btn btn-info' onClick={() => viewEmp(employee.id)}>View</button>
                                  <Link
                      to={`/viewuser/${employee.id}`}
                      id="buttonhome"
                      className="btn btn-outline-primary"
                    >
                      View
                    </Link>
                            </td>
                        </tr>)
                }
          
        
        

        </tbody>
      </table>
    </div>
  );
};

export default ListOfEmployee;