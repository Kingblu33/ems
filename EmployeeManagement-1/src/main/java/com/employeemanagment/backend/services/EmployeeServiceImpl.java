package com.employeemanagment.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import com.employeemanagment.backend.entity.EmployeeEntity;
import com.employeemanagment.backend.models.Employee;
import com.employeemanagment.backend.repositories.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	private EmployeeRepository employeeRepository;
	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
		super();
		this.employeeRepository = employeeRepository;
	}
	
	@Override
	public Employee createEmployee(Employee employee) {
		EmployeeEntity employeeEntity = new EmployeeEntity();
		
		BeanUtils.copyProperties(employee, employeeEntity);
		employeeRepository.save(employeeEntity);
		return employee;
	}

	   @Override
	    public List<Employee> getAllEmployees() {
	        List<EmployeeEntity> employeeEntities
	                = employeeRepository.findAll();

	        List<Employee> employees = employeeEntities
	                .stream()
	                .map(emp -> new Employee(
	                        emp.getId(),
	                        emp.getFirstName(),
	                        emp.getLastName(),
	                        emp.getEmailId()))
	                .collect(Collectors.toList());
	        return employees;
	    }

	@Override
	public boolean deleteEmployee(long id) {
		EmployeeEntity employee = employeeRepository.findById(id).get();
		
		employeeRepository.delete(employee);
		return false;
	}

	@Override
	public Employee getEmployeeById(long id) {
			EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
			
			Employee employee = new Employee();
			BeanUtils.copyProperties(employeeEntity,employee);
			return employee;
	}

	@Override
	public Employee updateEmployee(long id, Employee employee) {
		EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
		employeeEntity.setEmailId(employee.getEmailId());
		employeeEntity.setFirstName(employee.getFirstName());	
		employeeEntity.setLastName(employee.getLastName());
		
		
		employeeRepository.save(employeeEntity);
		return employee;
	}


}
