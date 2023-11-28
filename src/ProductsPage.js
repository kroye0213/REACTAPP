import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const ProductsPage = () => {

    const [topItems, setTopItems] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {

                const itemsResponse = await fetch('http://localhost:8001/topitem');
                const itemsData = await itemsResponse.json();
                setTopItems(itemsData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);

    function handleDelete(ItemID) {
        
    }

    return (
        <div className="container col-4 p-4">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Total Sales</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {topItems.map((item, index) => (
                    <tr key={index}>
                        <td>{item.ItemName}</td>
                        <td>{item.TotalSales}</td>
                        <td><Link to="/UpdateForm" className="btn btn-primary">
            Update
          </Link><button
                  className="btn btn-danger ml-2"
                  onClick={() => handleDelete(item.ItemID)}
                >
                  Delete
                </button></td>
                    </tr>
                ))}
                </tbody>
            </table>
<Link to="/HomePage" className="btn btn-primary">
            Go to Home Page
          </Link>  <Link to="/AddProductPage" className="btn btn-primary">
            Add a Product
          </Link>
        </div>

    );
}

export default ProductsPage;