import axios from "axios";

// const Rest_API_BASE_URL = 'http://localhost:8080/api/employee';
// const Rest_API_BASE_URL = 'http://localhost:8081/employee';
// export const listOfemp = () => axios.get("http://localhost:8081/employee/getAll");
// export const listEmployee = () =>{
//     return axios.get(Rest_API_BASE_URL);
// }

export const createEmployee = (employee) => axios.post("http://localhost:8081/employee/save",employee);
// export const getEmployee = (employeeId) => axios.get(`http://localhost:8081/employee/getById/${employeeId}`);
// console.log(getEmployee.data)


// const loadUser = async (employeeId) => {
//     const result = await axios.fetch(`http://localhost:8081/employee/getById/${employeeId}`);
//     // setUser(result.data);
//     console.log(result.data)
//   };
export const getEmployee = (employeeId) => axios.get('http://localhost:8081/employee/getById' + '/' + employeeId);
// export const updateEmployee = (employeeId,employee) =>axios.put("http://localhost:8081/employee/update"+"/"+employeeId,employee);

export const updateEmployee = (employeeId, employee) => axios.put("http://localhost:8081/employee/update" + '/' + employeeId, employee);
export const deleteEmployee = (employeeId ) =>axios.delete("http://localhost:8081/employee/delete"+"/"+employeeId);



