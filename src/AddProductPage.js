import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddProductPage = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const history = useHistory();

  const handleAddProduct = async () => {
    try {
      // Make a POST request to your API's add product endpoint
      const response = await fetch('http://localhost:8001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ProductName: productName, ProductPrice: productPrice }),
      });

      if (response.ok) {
        // Product added successfully, navigate to the product list page or any other page
        history.push('/products');
      } else {
        // Handle the error appropriately
        console.error('Error adding product:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <label>
          Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
