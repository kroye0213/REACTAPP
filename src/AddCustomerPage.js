import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddCustomerPage = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const history = useHistory();

  const handleAddCustomer = async () => {
    try {
      // Make a POST request to your API's add customer endpoint
      const response = await fetch('http://localhost:8001/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ CustomerName: customerName, CustomerEmail: customerEmail }),
      });

      if (response.ok) {
        // Customer added successfully, navigate to the customer list page or any other page
        history.push('/customers');
      } else {
        // Handle the error appropriately
        console.error('Error adding customer:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <form>
        <label>
          Name:
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleAddCustomer}>
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default AddCustomerPage;
