// UpdateForm.js
import React, { useState, useEffect } from 'react';

const UpdateForm = ({ customerId, onUpdate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Fetch existing customer data based on customerId when the component mounts
  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch(`http://localhost:8001/customers/${customerId}`);
        const customerData = await response.json();

        // Populate the fields with existing data
        setName(customerData.CustomerName);
        setEmail(customerData.CustomerEmail);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomerData();
  }, [customerId]);

  const handleUpdate = async () => {
    try {
      // Make a PUT request to your API's update endpoint
      const response = await fetch(`http://localhost:8001/updatecustomers/${customerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          CustomerName: name,
          CustomerEmail: email,
        }),
      });

      console.log(response.data);
      // Optionally, trigger the onUpdate callback or perform other actions
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  return (
    <div className="container col-6 p-4">
      <h2>Update Customer</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;

