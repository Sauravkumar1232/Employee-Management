import { Link } from "react-router-dom";
// import saveOrUpdateEmployee "EmployeeComponent";



const UserData =({employees})=>{
    console.log(employees)
    return(
        <>
            {Array.isArray(employees)?
                employees.map((emp,index)=>{
                    {/* const {id,name,userName,email,phone,age}=emp; */}
                    return(
                        <tr key={index}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.userName}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone}</td>
                            <td>{emp.age}</td>
                            <td>
                                <button className="btn btn-info"  >Update</button>
                            </td>
                            <td>
                    <Link
                      to={`/viewuser/${emp.id}`}
                      id="buttonhome"
                      className="btn btn-outline-primary"
                    >
                      View
                    </Link>
                    <Link
                      to={`/edituser/${emp.id}`}
                      id="buttonhome"
                      className="btn btn-outline-success"
                    >
                      Edit
                    </Link>
                    {/* <button
                      onClick={() => removeEmployee(emp.id)}
                      id="buttonhome"
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button> */}
                  </td>
                        </tr>

                    );
                })
                :null
            }
        </>
    )
}
export default  UserData