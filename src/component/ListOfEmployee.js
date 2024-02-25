import React, { useEffect } from 'react'
import { useState} from 'react'
import { listEmployees } from '../service/EmployeeServce'
import { useNavigate } from 'react-router-dom'

const  ListOfEmployee = () => {

const [ employees,setEmployees] = useState([])
const navigator = useNavigate();

useEffect(() => {
    listEmployees().then((response) =>{
        setEmployees(response.data);
    }).catch(error=>{
        console.error(error);
    })
    
},[])
// const loadUsers =async () =>{
//   const result=await axios.get("http://localhost:9114/users")
//   setUser(result.data)   

//      // ?????  console.log(result.data)      
//  }
// const {id} = useParams();
// useEffect(()=>{        // fetching data
//   listEmployees()
// },[])   

// function  listEmployees(){ async () =>{
//   const result=await axios.get("http://localhost:8081/employee/getAll")
//   setEmployees(result.data)   

//      // ?????  console.log(result.data)      
//  }}


 function addNewEmployee(){
  navigator('/save')
 }
  return (
    <div className='container'>
      <br/>
      <h2 className='text-center'>List Of Employee</h2>
      <button type="button" className="btn btn-outline-primary" onClick= {addNewEmployee}>Add Employee</button>
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
      
           { employees.forEach((employee,index) =>
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
