import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';
const UpdateEmployee = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: ""
    });
    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id).then((response) => {
            navigate("/employeeList");
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleChange = (e) => {
        const value = e.target.value;

        setEmployee({ ...employee, [e.target.name]: value });
    }



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmployeeService.getEmployeeById(id);
                setEmployee(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])
    return (
        <div className="flex max-w-2xl  mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Update Employee</h1>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                    <input type="text" value={employee.firstName} name="firstName" className="h-10 w-96 border mt-2 px-2 py-2" onChange={(e) => handleChange(e)} ></input>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                    <input type="text" value={employee.lastName} name="lastName" onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Email</label>
                    <input type="text" value={employee.emailId} name='emailId'
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>

                <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                    <button onClick={updateEmployee} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2 w-20 '>Update</button>

                    <button onClick={() => navigate("/")} className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2 w-20 '>Cancel</button>
                </div>
            </div>
        </div>
    )
};

export default UpdateEmployee