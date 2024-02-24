import React, { useEffect } from 'react'
import { useState } from 'react'
import { listEmployee } from '../service/EmployeeServce'

const ListOfEmployee = () => {

const [ employee,setEmployee] = useState([])

useEffect(() => {
    listEmployee().then((response) =>{
        setEmployee(response.data);
    }).catch(error=>{
        console.error(error);
    })
    
},[])
  return (
    <div className='container'>
      
      <h2 className='text-center'>List Of Employee</h2>
      <table className='table table-striped table-bordered table-danger'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Employee Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
        {
            employee.map(employee =>
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.userName}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.age}</td>
            </tr>)
        }

        </tbody>
      </table>

    </div>
  )
}

export default ListOfEmployee
