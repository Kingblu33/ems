import React, { useEffect, useState } from 'react';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';
function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route index element={<EmployeeList />} />
          <Route path='/employeeList' element={<EmployeeList />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/editEmployee/:id' element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}



export default App;
