import Link from "next/link";

const ManageProducts = () => {
  return (
    <div>
      <h1>Manage Products</h1>
      <p>Use the options below to manage your products:</p>
      <nav>
        <Link href="/admin/products/create">Create Product</Link>
        <br />
        <Link href="/admin/products/list">List Products</Link>
      </nav>
    </div>
  );
};

export default ManageProducts;
