package com.employeemanagment.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employeemanagment.backend.models.Employee;


@Service
public interface EmployeeService {

	Employee createEmployee(Employee employee);

	List<Employee> getAllEmployees();

	boolean deleteEmployee(long id);

	Employee getEmployeeById(long id);

	Employee updateEmployee(long id, Employee employee);

}
