const ListCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers from backend (replace with actual data fetching)
    setCustomers([
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ]);
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
            {/* Link to view order history */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCustomers;
