import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CustomerPage(props) {
  const [topCustomers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersResponse = await fetch('http://localhost:8001/topcustomers');
        const customersData = await customersResponse.json();
        setCustomers(customersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  const handleDelete = (customerId) => {
      // Add logic to delete the customer with the specified ID
      console.log(`Delete customer with ID ${customerId}`);
    };

  return (
    <div className="home-container">
      <h2>Customers</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {topCustomers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.CustomerName}</td>
              <td>{customer.CustomerEmail}</td>
              <td>
                <Link to="/UpdateForm" className="btn btn-primary">
            Update
          </Link>

                <button
                  className="btn btn-danger ml-2"
                  onClick={() => handleDelete(customer.CustomerID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/AddCustomerPage" className="btn btn-primary">
        Add Customer
      </Link>  <Link to="/HomePage" className="btn btn-primary">
            Go to Home Page
          </Link>
    </div>
  );
}

export default CustomerPage;
