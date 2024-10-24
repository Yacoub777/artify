import Link from 'next/link';

const AdminNavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/admin/products">Products</Link>
        </li>
        <li>
          <Link href="/admin/orders">Orders</Link>
        </li>
        <li>
          <Link href="/admin/customers">Customers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavBar;
