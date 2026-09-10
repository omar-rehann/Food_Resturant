# 👨‍💼 Food Delivery Restaurant — Admin Dashboard (MERN Stack)

This is the **Admin-facing side** of the Food Delivery Restaurant Web Application, built using the **MERN Stack**. It covers everything the restaurant admin can manage — categories, food, users, and orders.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* Admin Login
* JWT Authentication
* Protected Admin Routes
* Admin account based on a specific email
* Any other registered account is treated as a normal user (no admin access)
* Invalid login credentials handling

---

### 📂 Category Management

The admin can:

* Add new categories
* View all categories
* Delete categories

Examples:

* 🍕 Pizza
* 🥤 Drinks
* 🍔 Burgers
* 🍽️ Dishes
* 🥗 Salads
* 🍲 Soups
* 🍰 Desserts
* Others

Food items are displayed to users according to their assigned category.

---

### 🍔 Food Management

The admin can:

* Add new food items
* Upload food images
* Add food name
* Add food price
* Add food description
* Assign food to a category
* View all food items
* Delete food items

Each food item contains:

```text
Food Name
Image
Price
Description
Category
```

---

### 👥 User Management

The admin can:

* View registered users
* View user information
* View users' orders
* Monitor purchased products

---

### 📦 Order Management

The admin can view:

* Customer information
* Purchased products
* Product prices
* Total order price
* Order details

---

## 🛠️ Technologies Used

### Frontend

* **React.js** — Building the admin dashboard UI
* **Next.js** — Application structure and routing
* **React Bootstrap** — Responsive UI components
* **Tailwind CSS** — Custom styling and responsive design
* **Font Awesome** — Icons
* **SweetAlert2** — Alerts and confirmations

### Backend

* **Node.js** — Backend runtime environment
* **Express.js** — Building the REST API
* **MongoDB** — Database
* **Mongoose** — MongoDB object modeling
* **JWT (JSON Web Token)** — Authentication and authorization
* **Multer** — Handling image/file uploads
* **Validation** — Validating admin input data

---

## 🏗️ Project Structure (Admin Side)

```text
Frontend
│
├── Authentication
│   └── Admin Login
│
└── Admin
    ├── Dashboard
    ├── Categories
    ├── Food Management
    ├── Users
    └── Orders
```

---

## 🔑 Authorization Flow

```text
Login
  ↓
Check Email
  ↓
Admin Email?
  ├── Yes → Admin Dashboard
  └── No  → Access Denied
```

---

## 🔄 Admin Application Flow

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
     ↓
Monitor Users & Orders
```

---

## 📁 Backend Structure (Relevant to Admin)

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

## 📁 Frontend Structure (Admin Side)

```text
frontend/
│
├── components/
│   ├── Navbar
│   ├── Sidebar
│   ├── FoodTable
│   ├── CategoryTable
│   └── ...
│
├── pages/
│   └── Admin
│       ├── Dashboard
│       ├── AddCategory
│       ├── ListCategory
│       ├── AddFood
│       ├── ListFood
│       ├── Users
│       └── Orders
│
├── context/
│   └── StoreContext
│
└── App.jsx
```

---

## 🌐 API Endpoints Used by the Admin Dashboard

```text
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
```

---

## ⚙️ Installation

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

Then run the admin frontend:

```bash
cd frontend
npm install
npm run dev
```

---

## 🔒 Security

* JWT authentication
* Protected Admin Dashboard routes
* Authorization middleware (admin-only access)
* Server-side validation on all admin actions

---

## 🎯 Purpose

This part of the project focuses on **restaurant content and order management** — giving the admin full control over categories, food items, users, and orders, as part of practicing real-world MERN Stack development.

---

## 👨‍💻 Author

**Omar Rehan**

Frontend / MERN Stack Developer

Built with ❤️ using the MERN Stack.