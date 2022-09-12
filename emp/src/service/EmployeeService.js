import axios from "axios";

const EMPLOYEE_APIE_BASE_URL = "http://localhost:8080/api/v1/employees";
class EmployeeService {

    saveEmployee(employee) {
        return axios.post(EMPLOYEE_APIE_BASE_URL, employee);
    }

    getEmployees() {
        return axios.get(EMPLOYEE_APIE_BASE_URL);
    }

    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_APIE_BASE_URL + "/" + id);
    }

    getEmployeeById(id) {
        return axios.get(EMPLOYEE_APIE_BASE_URL + "/" + id);
    }

    updateEmployee(employee, id) {
        return axios.put(EMPLOYEE_APIE_BASE_URL + "/" + id, employee);
    }
}




export default new EmployeeService;