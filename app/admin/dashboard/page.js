"use client";
import styles from "./dashboard.module.css";

export default function AdminDashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>Admin Dashboard</header>
      <nav className={styles.navigation}>
        <a href="/admin/manage-products">Manage Products</a>
        <a href="/admin/orders">Manage Orders</a>
        <a href="/admin/customers">Manage Customers</a>
      </nav>
      <div className={styles.content}>
        <p id="welcome">Welcome to the admin dashboard! Use the links above to manage your content.</p>
      </div>
    </div>
  );
}
