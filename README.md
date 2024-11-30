# Artify  

## Description  

Artify is a full-stack web application designed for users to explore, showcase, and purchase artwork. This platform provides a seamless experience for both customers and administrators, featuring functionalities such as user registration, product management, and order tracking. The goal of Artify is to bridge the gap between artists and art enthusiasts by offering a visually engaging and user-friendly platform.  

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

- **User Registration and Authentication**: Secure account creation and login with JWT-based authentication.  
- **Browse and Search Artworks**: Explore and filter a diverse range of artworks by categories.  
- **Admin Product Management**: Create, update, delete, and list products via a dedicated admin dashboard.  
- **Order History**: Customers can view and track their order statuses.  
- **Admin Dashboard**: An intuitive interface for managing users, orders, and products efficiently.  
- **Responsive Design**: Optimized for all screen sizes to provide an excellent user experience on any device.  

## Technologies Used  

### Frontend  

- **Next.js**: React framework for server-side rendering and static site generation.  
- **React**: A library for building user interfaces.  
- **CSS Modules**: Scoped and modular CSS for styling.  

### Backend  

- **Node.js**: JavaScript runtime for server-side development.  
- **Express.js**: Framework for building APIs and handling server logic.  

### Database  

- **MongoDB**: A NoSQL database hosted on MongoDB Atlas to store user and product data.  

### Others  

- **JWT (JSON Web Tokens)**: For secure authentication and session management.  
- **Axios**: For seamless HTTP requests between frontend and backend.  

## Installation  

To set up the project locally:  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/MostafaYacoub133/artify.git  
   ```  

2. **Navigate into the project directory**:  
   ```bash  
   cd artify  
   ```  

3. **Install dependencies**:  
   ```bash  
   npm install  
   ```  

4. **Set up environment variables**:  
   Create a `.env` file in the root directory with the following content:  
   ```plaintext  
   MONGODB_URI=mongodb+srv://user_01:admin@cluster0.mongodb.net/artify?retryWrites=true&w=majority  
   JWT_SECRET=your_jwt_secret  
   ```  

## Usage  

To run the project:  

1. **Start the development server**:  
   ```bash  
   npm run dev  
   ```  

2. Open your browser and navigate to `http://localhost:3000` to view the application.  

### Accessing the Admin Dashboard  

Visit `http://localhost:3000/admin/dashboard` to access admin functionalities, such as managing users, products, and orders.  

## API Endpoints  

### User Authentication  

- `POST /api/auth/signup`: Register a new user.  
- `POST /api/auth/login`: Log in an existing user.  

### Product Management  

- `GET /api/products`: Retrieve all products.  
- `POST /api/products`: Add a new product (admin only).  
- `PUT /api/products/:id`: Update a product by ID (admin only).  
- `DELETE /api/products/:id`: Delete a product by ID (admin only).  

### Order Management  

- `GET /api/orders`: Get all orders (admin only).  
- `POST /api/orders`: Place a new order.  

## Screenshots  

Screenshots of the platform can be found in the **`screenshots`** folder of the repository.  

## Future Improvements  

- Role-based access control for customers and admins.  
- Pagination for product and order listings.  
- Integration with payment gateways for seamless transactions.  
- Real-time notifications for order updates.  
- Enhanced search and filter capabilities for users.  

## Contributing  

Contributions are welcome! To contribute:  

1. Fork the repository.  
2. Create a new branch for your feature or fix:  
   ```bash  
   git checkout -b feature/your-feature  
   ```  
3. Make your changes and commit them:  
   ```bash  
   git commit -m "Add feature: your feature description"  
   ```  
4. Push your branch:  
   ```bash  
   git push origin feature/your-feature  
   ```  
5. Submit a pull request with a clear description of your changes.  

---  

**Author**: Mostafa Yacoub  
- **Email**: [yacoub133@gmail.com](mailto:yacoub133@gmail.com)  
- **GitHub**: [MostafaYacoub133](https://github.com/Yacoub777)  
```

You can copy and paste this content into your `README.md` file.
