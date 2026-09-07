# 🍔 Food Delivery Restaurant — MERN Stack

A full-stack **Food Delivery Restaurant Web Application** built using the **MERN Stack**.

The application consists of two main parts:

* 👨‍💼 **Admin Dashboard**
* 👤 **User Application**

The project provides authentication, authorization, food and category management, user management, and order management.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Role-based Authorization
* Admin account based on a specific email
* Any other registered account is treated as a normal user
* Invalid login credentials handling

---

# 👨‍💼 Admin Dashboard

The admin has full control over the restaurant content and users.

## 📂 Category Management

The admin can:

* Add new categories
* View all categories
* Delete categories
* Add new Meals
* View all Meals
* Delete Meals

Examples:

* 🍕 Pizza
* 🥤 Drinks
* 🍔 Burgers
* 🍽️ Dishes
* 🥗 Salads
* 🍲 Soups
* 🍰 Desserts
*  Others



Food items are displayed according to their assigned category.

---

## 🍔 Food Management

The admin can:

* Add new food items
* Upload food images
* Add food name
* Add food price
* Add food description
* Assign food to a category
* View all food items
* Delete food items

Each food item contains information such as:

```text
Food Name
Image
Price
Description
Category
```

---

## 👥 User Management

The admin can:

* View registered users
* View user information
* View users' orders
* Monitor purchased products

This allows the admin to manage and monitor restaurant customers.

---

## 📦 Order Management

The admin can view:

* Customer information
* Purchased products
* Product prices
* Total order price
* Order details

---

# 👤 User Application

Users can interact with the restaurant through the customer interface.

## 🏠 Home Page

Users can:

* Browse the restaurant
* View available categories
* Browse food items
* Navigate through the website

---

## 📂 Food Categories

Users can select a category and view the food items belonging to that category.

For example:

```text
Pizza
 ├── Margherita
 ├── Pepperoni
 └── Chicken Pizza

Drinks
 ├── Cola
 ├── Pepsi
 └── Orange Juice
```

---

## 🍔 Food Items

Users can view:

* Food image
* Food name
* Description
* Price
* Category

Users can select the products they want to purchase.

---

## 🛒 Cart / Orders

Users have an order/cart section where they can view their selected products.

The table contains information such as:

| Product | Price | Quantity | Total |
| ------- | ----: | -------: | ----: |
| Pizza   |   $10 |        2 |   $20 |
| Burger  |    $8 |        1 |    $8 |

The application calculates the total price of the selected products.

---

## 📄 Services Page

The application also includes a services section where users can learn about the services provided by the restaurant.

---

## 📞 Contact Page

Users can access the restaurant's contact information through the Contact page.

---

# 🛠️ Technologies Used

### Frontend

* **React.js** — Building the user interface and reusable components
* **Next.js** — Application structure and routing
* **React Bootstrap** — Responsive UI components
* **Tailwind CSS** — Custom styling and responsive design
* **Font Awesome** — Icons
* **SweetAlert2** — Alerts and user notifications

### Backend

* **Node.js** — Backend runtime environment
* **Express.js** — Building the REST API
* **MongoDB** — Database
* **Mongoose** — MongoDB object modeling
* **JWT (JSON Web Token)** — Authentication and authorization
* **Token-based Authentication** — Securing protected routes
* **Validation** — Validating user and application data
* **Multer** — Handling image/file uploads

## Database

* MongoDB
* Mongoose

## Other Tools

* Git
* GitHub
* Postman
* Cloudinary / Image Upload
* npm

---

# 🏗️ Project Architecture

```text
Food Delivery Restaurant
│
├── Frontend
│   │
│   ├── Authentication
│   │   ├── Login
│   │   └── Register
│   │
│   ├── User
│   │   ├── Home
│   │   ├── Categories
│   │   ├── Food
│   │   ├── Cart / Orders
│   │   ├── Services
│   │   └── Contact
│   │
│   └── Admin
│       ├── Dashboard
│       ├── Categories
│       ├── Food Management
│       ├── Users
│       └── Orders
│
└── Backend
    │
    ├── Models
    ├── Controllers
    ├── Routes
    ├── Middleware
    ├── Authentication
    └── Database
```

---

# 🔑 Authentication Flow

The application uses JWT-based authentication.

```text
Register
   ↓
User Account Created
   ↓
Login
   ↓
JWT Token
   ↓
Authentication Middleware
   ↓
Protected Routes
```

Admin authorization is handled separately.

```text
Login
  ↓
Check Email
  ↓
Admin Email?
  ├── Yes → Admin
  └── No  → User
```

---

# 🔄 Application Flow

### Admin

```text
Admin Login
     ↓
Admin Dashboard
     ↓
Create Category
     ↓
Create Food
     ↓
Assign Food to Category
     ↓
Food Appears in User Application
```

### User

```text
User Registration
       ↓
User Login
       ↓
Browse Categories
       ↓
Select Category
       ↓
View Food
       ↓
Select Products
       ↓
View Cart / Orders
       ↓
Calculate Total
```

---

# 📁 Backend Structure

```text
backend/
│
├── controllers/
│   ├── authController.js
│   ├── foodController.js
│   ├── categoryController.js
│   ├── userController.js
│   └── orderController.js
│
├── models/
│   ├── User.js
│   ├── Food.js
│   ├── Category.js
│   └── Order.js
│
├── routes/
│   ├── authRoutes.js
│   ├── foodRoutes.js
│   ├── categoryRoutes.js
│   ├── userRoutes.js
│   └── orderRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── config/
│   └── database.js
│
└── server.js
```

---

# 📁 Frontend Structure

```text
frontend/
│
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── FoodCard
│   ├── Category
│   └── ...
│
├── pages/
│   ├── Home
│   ├── Login
│   ├── Register
│   ├── Services
│   ├── Contact
│   ├── Cart
│   └── Admin
│
├── context/
│   └── StoreContext
│
└── App.jsx
```

---

# 🔒 Security

The project implements:

* JWT authentication
* Protected API routes
* Authorization middleware
* Password authentication
* Admin/User role separation
* Protected Admin Dashboard
* Server-side authorization

---

# 📸 Screenshots

You can add screenshots of the project here:

```text
screenshots/
├── login.png
├── register.png
├── home.png
├── categories.png
├── food.png
├── cart.png
├── admin-dashboard.png
├── admin-food.png
├── admin-categories.png
└── admin-users.png
```

Example:

```markdown
![Login](./screenshots/login.png)

![Home](./screenshots/home.png)

![Admin Dashboard](./screenshots/admin-dashboard.png)
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/food-delivery-restaurant.git
```

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the backend:

```bash
npm run dev
```

Then run the frontend:

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 API

The frontend communicates with the backend through REST APIs.

Example endpoints:

```text
POST   /api/auth/register
POST   /api/auth/login

POST   /api/category/add
GET    /api/category/list
DELETE /api/category/remove

POST   /api/food/addfood
GET    /api/food/list
DELETE /api/food/removefood
PUT    /api/food/updatefood

GET    /api/user/list
GET    /api/order/list
POST   /api/order/create
```

---

# 🎯 Project Goals

This project was built to practice and demonstrate real-world **MERN Stack development**, including:

* Frontend development with React
* Backend development with Node.js and Express
* MongoDB database management
* REST API development
* Authentication
* Authorization
* CRUD operations
* File/image uploads
* State management
* Admin dashboard development
* User and order management

---

# 🚧 Future Improvements

Possible future features:

* 💳 Online Payment Integration
* 📍 Order Tracking
* 🔔 Notifications
* ⭐ Food Reviews & Ratings
* ❤️ Favorite Products
* 📦 Advanced Order Status
* 📊 Advanced Admin Analytics
* 🔎 Food Search
* 🏷️ Discount & Coupon System

---

# 👨‍💻 Author

**Omar Rehan**

Frontend / MERN Stack Developer

Built with ❤️ using the MERN Stack.
