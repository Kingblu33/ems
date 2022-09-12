import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import EmployeeService from '../service/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [])

    const deleteEmployee = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((response => {
            if (employees) {
                setEmployees((prevElement) => {
                    return prevElement.filter((employee) => employee.id !== id);
                });
            }
        }))
    }
    return (
        <div className='container mx-auto my-8'>
            <div className='h-12'>
                <button onClick={() => navigate("/addEmployee")} className='transition ease-in-out delay-50 rounded bg-slate-600 hover:bg-slate-800 text-white px-6 py-2 font-semibold '>AddEmployee</button>
            </div>
            <div className='flex shadow border-b'>
                <table className='min-w-full'>
                    <thead className='bg-grey-50'>
                        <tr>
                            <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3'>First Name</th>
                            <th className='text-left font-medium  text-gray-500 uppercase tracking-wide py-3'>Last Name</th>
                            <th className='text-left font-medium  text-gray-500 uppercase tracking-wide py-3'>EmailId</th>
                            <th className='text-left font-medium  text-gray-500 uppercase tracking-wide py-3'>Actions</th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody className='bg-white'>
                            {employees.map((employee) => (
                                <Employee employee={employee} key={employee.id} deleteEmployee={deleteEmployee} />
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}

export default EmployeeList