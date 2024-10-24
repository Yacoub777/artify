import { useState, useEffect } from "react";

const ListProducts = () => {
  const [products, setProducts] = useState([]); // Placeholder for product data
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch products from backend (replace with actual data fetching)
    setProducts([
      { id: 1, name: "Product 1", price: 100, stock: 10 },
      { id: 2, name: "Product 2", price: 200, stock: 5 },
    ]);
  }, [searchQuery, page]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(1); // Reset to first page on search
  };

  return (
    <div>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} - Stock: {product.stock}
            {/* Link to update product */}
          </li>
        ))}
      </ul>
      {/* Pagination */}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default ListProducts;
