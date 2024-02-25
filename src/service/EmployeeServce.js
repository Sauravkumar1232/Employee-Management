import axios from "axios";

// const Rest_API_BASE_URL = 'http://localhost:8080/api/employee';
// const Rest_API_BASE_URL = 'http://localhost:8081/employee';
export const listEmployees = () => axios.get("http://localhost:8081/employee/getAll");
// export const listEmployee = () =>{
//     return axios.get(Rest_API_BASE_URL);
// }

export const createEmployee = (employee) => axios.post("http://localhost:8081/employee/save",employee);
