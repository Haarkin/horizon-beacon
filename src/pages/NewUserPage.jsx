import React, { useState } from 'react';

const NewUserPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    // Add more fields as needed for creating a new user profile
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the form data and create a new user profile
    console.log('Form submitted:', formData);
    // You can perform further actions such as sending the form data to an API
    // or updating the state to reflect the newly created user profile
  };

  return (
    <div>
      <h2>Create New User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more form fields for additional user profile information */}
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default NewUserPage;
