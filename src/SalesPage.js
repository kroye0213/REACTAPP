import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const SalesPage = () => {

  const [topSales, setTopSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
       <div className="top-section-item">
          <h2>Top Items</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {topSales.map((sales, index) => (
                <tr key={index}>
                  <td>{sales.Date}</td>
                  <td>{sales.CustomerName}</td>
                  <td>{sales.Product}</td>
                  <td>{sales.Quantity}</td>
                  <td>{sales.TotalSales}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/ItemPage" className="btn btn-primary">
            Go to Item Page
          </Link>
         <Link to="/HomePage" className="btn btn-primary">
            Go to Home Page
          </Link>
       </div>
    );
}

export default SalesPage;