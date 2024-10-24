import { useState, useEffect } from "react";
import AdminNavBar from "../../../components/AdminNavBar";

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulated product list
    setProducts([
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
    ]);
  }, []);

  return (
    <div>
      <AdminNavBar />
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
      <button>Create New Product</button>
    </div>
  );
};

export default ListProducts;
