
import React, { useState } from 'react';

const Payslip = () => {
 
  const [employeeData, setEmployeeData] = useState({
    name: '',
    employeeCode: '',
    dateOfJoining: '',
    bankDetails: '',
    basicSalary: '',
    medicalAllowance: '',
    conveyanceAllowance: '',
    deductions: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const calculateGrossSalary = () => {
    const { basicSalary, medicalAllowance, conveyanceAllowance } = employeeData;
    return basicSalary + medicalAllowance + conveyanceAllowance;
  };

  const calculateNetSalary = () => {
    const { basicSalary, medicalAllowance, conveyanceAllowance, deductions } = employeeData;
    return (basicSalary + medicalAllowance + conveyanceAllowance) - deductions;
  };

  return (
    <div>
      <h2>Payslip </h2>
      <form>
        <label>  Name:</label>
        <input
          type="text"
          name="name"
          value={employeeData.name}
          onChange={handleInputChange}
        />
        <br></br>
        <label>Employee Code:</label>
        <input
          type="text"
          name="employeeCode"
          value={employeeData.employeeCode}
          onChange={handleInputChange}
        />
        <br></br>
        <label>Date of Joining:</label>
        <input
          type="date"
          name="dateOfJoining"
          value={employeeData.dateOfJoining}
          onChange={handleInputChange}
        />
        <br></br>
        <label>Bank Details:</label>
        <input
          type="text"
          name="bankDetails"
          value={employeeData.bankDetails}
          onChange={handleInputChange}
        />
        <br></br>
        <label>Basic Salary:</label>
        <input
          type="number"
          name="basicSalary"
          value={employeeData.basicSalary}
          onChange={handleInputChange}
        />
        <br></br>
        <label>Medical Allowance:</label>
        <input
          type="number"
          name="medicalAllowance"
          value={employeeData.medicalAllowance}
          onChange={handleInputChange}
        />
        <br></br>
        <label>Conveyance Allowance:</label>
        <input
          type="number"
          name="conveyanceAllowance"
          value={employeeData.conveyanceAllowance}
          onChange={handleInputChange}
        />
        <br></br>
        <label>Deductions:</label>
        <input
          type="number"
          name="deductions"
          value={employeeData.deductions}
          onChange={handleInputChange}
        />
      </form>
      <div>
        <h3>Employee Details</h3>
        <p>  Name: {employeeData.name}</p>
        <p>Employee Code: {employeeData.employeeCode}</p>
        <p>Date of Joining: {employeeData.dateOfJoining}</p>
        <p>Bank Details: {employeeData.bankDetails}</p>
        <h3>Earnings</h3>
        <p>Basic Salary: {employeeData.basicSalary}</p>
        <p>Medical Allowance: {employeeData.medicalAllowance}</p>
        <p>Conveyance Allowance: {employeeData.conveyanceAllowance}</p>
        <h3>Deductions</h3>
        <p>Deductions: {employeeData.deductions}</p>
        <h3>Total</h3>
        <p>Gross Salary: {calculateGrossSalary()}</p>
        <p>Net Salary: {calculateNetSalary()}</p>
      </div>
    </div>
  );
};

export default Payslip;
