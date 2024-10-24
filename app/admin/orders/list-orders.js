const ListOrders = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch orders from backend (replace with actual data fetching)
    setOrders([
      { id: 1, customerName: "John Doe", status: "Pending" },
      { id: 2, customerName: "Jane Smith", status: "Shipped" },
    ]);
  }, [search]);

  return (
    <div>
      <h2>Order List</h2>
      <input
        type="text"
        placeholder="Search by order number or customer name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.customerName} - Status: {order.status}
            {/* Link to update order */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOrders;
