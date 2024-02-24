import axios from "axios";

const Rest_API_BASE_URL = 'http://localhost:8081/employee';
export const listEmployee = () => axios.get(Rest_API_BASE_URL);