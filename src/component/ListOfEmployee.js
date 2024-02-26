import React, { useEffect, useParams } from "react";
import { useState } from "react";
import { listEmployees } from "../service/EmployeeServce";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Await } from "react-router-dom";

  const ListOfEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();
  // const {id}=useParams();

  useEffect(() => {
    listEmployees().then((response) => {
      setEmployees(response.data);
    })
  }, [])
  // console.log(employees)

  function addNewEmployee() {
    navigator("/save");
  }


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

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
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
        <tfoot>
          {
            dummydata.map(employee =>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.userName}</td>
                <td>{employee.email}</td>
                <td>{employee.age}</td>
                <td>{employee.phone}</td>
                <td>
                  <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                  {/* <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                    style={{marginLeft: '10px'}}
                                >Delete</button> */}
                </td>
              </tr>)
          }

        </tfoot>
      </table>
    </div>
  );
};

export default ListOfEmployee;