import React, {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    id:"",
    name: "",
    userName: "",
    email: "",
    phone: "",
    age:""
  })

  useEffect(()=>{
    fetchUser();
  },[])
  const fetchUser=async()=>{
    try{
const res=await fetch(`http://localhost:8081/employee/getById/`+id);
const data1=await res.json();
setUser(data1.data)
console.log(data1)
    }catch(e){
      console.error(e)
    }
  }


  const { id } = useParams(); //specific user for specific id
  // //hook
  // useEffect(() => {
  //   loadUser();
  // }, []);

  // const loadUser=async()=>{
  //   const result =  await fetch(`http://localhost:8081/employee/getById/`+id);
  //     const data=await result.json()
  //   console.log(data)
  //   setUser(data);
  //   console.log(user.age)
  // };
  
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h3 className="text-center m-4"> Employee Details</h3>

          <div className="card">
            <div className="card-header">
            
              Details of user id: {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name : {user.name}</b>
                </li>
                <li className="list-group-item">
                  <b>UserName : {user.userName}</b>
                </li>
                <li className="list-group-item">
                  <b>Email : {user.email}</b>
                </li>
                <li className="list-group-item">
                  <b>Phone : {user.phone}</b>
                </li>
                <li className="list-group-item">
                 <b> Age : {user.age} </b>
                </li>
              </ul>
            </div>
          </div>
          <Link to={"/getAll"} className="backToHome">
         
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
