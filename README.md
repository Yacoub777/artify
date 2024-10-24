
# Artify

## Description

Artify is a full-stack web application designed for users to explore, showcase, and purchase artwork. This platform provides a seamless user experience for both customers and administrators, enabling functionalities like user registration, product management, and order history. The goal of Artify is to connect artists with art enthusiasts in a visually appealing and user-friendly environment.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)

## Features

- **User Registration and Authentication**: Secure sign-up and login functionalities to manage user accounts.
- **Browse and Search Artworks**: Users can easily navigate through a wide range of artworks and filter based on categories.
- **Manage Products**: Admins can create, list, update, and delete products directly from the dashboard.
- **View Order History**: Customers can check their past orders and their statuses.
- **Admin Dashboard**: A comprehensive admin interface for managing users, products, and orders efficiently.
- **Responsive Design**: Mobile-friendly interface that adapts to different screen sizes for a better user experience.

## Technologies Used

- **Frontend**:

  - **Next.js**: A React framework for server-side rendering and static site generation.
  - **React**: JavaScript library for building user interfaces.
  - **CSS Modules**: For modular and scoped CSS styling.

- **Backend**:

  - **Node.js**: JavaScript runtime for building server-side applications.
  - **Express.js**: Web framework for Node.js to build APIs easily.

- **Database**:

  - **MongoDB**: NoSQL database to store user and product data, hosted on MongoDB Atlas.

- **Others**:
  - **JWT**: For secure authentication.
  - **Axios**: For making HTTP requests to the backend.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Yacoub/artify.git
   ```
````

2. Navigate into the project directory:

   ```bash
   cd artify
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```plaintext
   MONGODB_URI=mongodb+srv://user_01:admin@cluster0.1qiwl5v.mongodb.net/?retryWrites=true&w=majority
   ```


## Usage

To run the project locally, use the following command:

```bash
npm run dev
```

Open your browser and go to `http://localhost:3000` to view the application.

### Accessing Admin Dashboard

To access the admin dashboard, navigate to `http://localhost:3000/admin/dashboard`. You will be able to manage products, orders, and users from this interface.

## API Endpoints

Here are some key API endpoints you can interact with:

- **User Authentication**:

  - `POST /api/auth/signup`: Register a new user.
  - `POST /api/auth/login`: Log in an existing user.

- **Product Management**:

  - `GET /api/products`: Retrieve a list of all products.
  - `POST /api/products`: Create a new product.
  - `PUT /api/products/:id`: Update a product by ID.
  - `DELETE /api/products/:id`: Delete a product by ID.

- **Order Management**:
  - `GET /api/orders`: Retrieve a list of all orders.
  - `POST /api/orders`: Create a new order.

## Screenshots
Open projectoverview folder
![Admin Panel Screenshot](./projectoverview/Screenshot 2024-10-24 225018.png)

## Future Improvements

- Add user roles (e.g., customer, admin) with different permissions.
- Implement pagination for product listings.
- Improve UI/UX with more responsive design elements.
- Integrate payment processing for online transactions.
- Implement real-time notifications for order status updates.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. You can also open issues for any bugs or feature requests.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

**Author**: Mostafa Yacoub  
**Email**: yacoub133@gmail.com  
**GitHub**: [Yacoub777](https://github.com/Yacoub777)
