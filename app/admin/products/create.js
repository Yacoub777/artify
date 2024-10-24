import { useState } from 'react';
import AdminNavBar from '../../../components/AdminNavBar';

export default function CreateProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Creating product: ${name} - ${price}`);
  };

  return (
    <div>
      <AdminNavBar />
      <h2>Create New Product</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Product Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
