import React, { useState } from "react";
import { createEmployee } from "../service/EmployeeServce";
import { useNavigate } from "react-router-dom";

const EmployeeComponent = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const navigator = useNavigate();

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
  function saveEmployee(e) {
    e.preventDefault();

    const employee = { name, userName, email, phone, age };
    console.log(employee);

    createEmployee(employee).then((response)=>{
      console.log(response.data);
      navigator('/getAll')
    })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Employee </h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Employee Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={ name }
                  onChange={(e)=>setName(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Employee User Name</label>
                <input
                  type="text"
                  placeholder="Enter User Name"
                  name="userName"
                  value={ userName }
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
              <button className="btn btn-success" onClick={saveEmployee}>
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
