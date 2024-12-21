import React, { useState } from 'react';
import './PatientFormStyles.css'; 

const PatientInfoForm = ({ onInfoSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onInfoSubmit(formData);
  };

  return (
    <div className="patient-form-container">
      <h2>Patient Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Patient Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter patient name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            required
          />
        </div>
        <button type="submit">
          Continue to Diagnosis
        </button>
      </form>
    </div>
  );
};

export default PatientInfoForm;
