import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams(); //specific user for specific id
  //hook
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9114/user/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h3 className="text-center m-4"> Employee Detail</h3>

          <div className="card">
            <div className="card-header">
              Details of user id: {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name : {user.name}</b>
                </li>
                <li className="list-group-item">
                  <b>UserName : {user.username}</b>
                </li>
                <li className="list-group-item">
                  <b>Email : {user.email}</b>
                </li>
                <li className="list-group-item">
                  <b>Phone : {user.phone}</b>
                </li>
              </ul>
            </div>
          </div>
          <Link to={"/"} className="backToHome">
         
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
