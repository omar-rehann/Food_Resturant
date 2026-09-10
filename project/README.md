# 🍔 Food Delivery Restaurant — User Application (MERN Stack)

This is the **User-facing side** of the Food Delivery Restaurant Web Application, built using the **MERN Stack**. It covers everything a regular customer can do in the app — no admin features included.

---

## 🚀 Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Invalid login credentials handling

---

### 🏠 Home Page

Users can:

* Browse the restaurant
* View available categories
* Browse food items
* Navigate through the website

---

### 📂 Food Categories

Users can select a category and view the food items belonging to it.

Example:

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

### 🍔 Food Items

For each food item, users can view:

* Food image
* Food name
* Description
* Price
* Category

Users can select the products they want to purchase.

---

### 🛒 Cart / Orders

Users have a cart/orders section where they can view their selected products.

| Product | Price | Quantity | Total |
| ------- | ----: | -------: | ----: |
| Pizza   |   $10 |        2 |   $20 |
| Burger  |    $8 |        1 |    $8 |

The application automatically calculates the total price of selected products.

---

### 📄 Services Page

A page where users can learn about the services provided by the restaurant.

---

### 📞 Contact Page

Users can access the restaurant's contact information.

---

## 🛠️ Technologies Used

### Frontend

* **React.js** — Building the user interface and reusable components
* **Next.js** — Application structure and routing
* **React Bootstrap** — Responsive UI components
* **Tailwind CSS** — Custom styling and responsive design
* **Font Awesome** — Icons
* **SweetAlert2** — Alerts and user notifications

### Backend (consumed via API)

* **Node.js** — Backend runtime environment
* **Express.js** — REST API
* **MongoDB** — Database
* **Mongoose** — MongoDB object modeling
* **JWT (JSON Web Token)** — Authentication
* **Multer** — Handling image uploads (for food images displayed to users)

---

## 🏗️ Project Structure (User Side)

```text
Frontend
│
├── Authentication
│   ├── Login
│   └── Register
│
└── User
    ├── Home
    ├── Categories
    ├── Food
    ├── Cart / Orders
    ├── Services
    └── Contact
```

---

## 🔑 Authentication Flow

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

---

## 🔄 User Application Flow

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

## 📁 Frontend Structure

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
│   └── Cart
│
├── context/
│   └── StoreContext
│
└── App.jsx
```

---

## 🌐 API Endpoints Used by the User App

```text
POST   /api/auth/register
POST   /api/auth/login

GET    /api/category/list

GET    /api/food/list

POST   /api/order/create
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/food-delivery-restaurant.git
```

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

> Note: Make sure the backend server is running so the user app can fetch categories, food items, and handle orders.

---

## 🔒 Security

* JWT authentication
* Protected routes for logged-in users
* Server-side validation on all requests

---

## 🎯 Purpose

This part of the project focuses on the **customer experience** — browsing, selecting food, and placing orders — as part of practicing real-world MERN Stack development.

---

## 👨‍💻 Author

**Omar Rehan**

Frontend / MERN Stack Developer

Built with ❤️ using the MERN Stack.