import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [topCustomers, setTopCustomers] = useState([]);
  const [topItems, setTopItems] = useState([]);
  const [topSales, setTopSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersResponse = await fetch('http://localhost:8001/topcustomers');
        const customersData = await customersResponse.json();
        setTopCustomers(customersData);

        const itemsResponse = await fetch('http://localhost:8001/topitem');
        const itemsData = await itemsResponse.json();
        setTopItems(itemsData);

        const salesResponse = await fetch('http://localhost:8001/topsales');
        const salesData = await salesResponse.json();
        setTopSales(salesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <div className="top-section">
        <div className="top-section-item">
          <h2>Top Customers</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {topCustomers.slice(0, 5).map((customer, index) => (
                <tr key={index}>
                  <td>{customer.CustomerName}</td>
                  <td>{customer.TotalSales}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/CustomerPage" className="btn btn-primary">
            Go to Customer Page
          </Link>
        </div>

        <div className="top-section-item">
          <h2>Top Items</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {topItems.slice(0, 5).map((item, index) => (
                <tr key={index}>
                  <td>{item.ItemName}</td>
                  <td>{item.TotalSales}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/ProductsPage" className="btn btn-primary">
            Go to Products Page
          </Link>
        </div>

        <div className="top-section-item">
          <h2>Top Sales</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Sales Date</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {topSales.slice(0, 5).map((sales, index) => (
                <tr key={index}>
                  <td>{sales.Date}</td>
                  <td>{sales.TotalSales}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/SalesPage" className="btn btn-primary">
            Go to Sales Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
