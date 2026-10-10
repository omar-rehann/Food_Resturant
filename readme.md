<!-- Animated Header -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:7C2D12,50:EA580C,100:F59E0B&height=220&section=header&text=Food%20Delivery%20Restaurant&fontSize=44&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=MERN%20Stack%20%7C%20Admin%20Dashboard%20%2B%20User%20App&descAlignY=58&descSize=18" width="100%" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1000&color=EA580C&center=true&vCenter=true&width=600&lines=Full-Stack+Food+Ordering+Platform;JWT+Auth+%7C+Role-Based+Access;Admin+Dashboard+%2B+Customer+App;Built+with+the+MERN+Stack" alt="Typing animation" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-api">API</a>
</p>

---

## 📖 About

A full-stack **Food Delivery Restaurant** web application built with the **MERN Stack**.

It has two parts:

| 👨‍💼 Admin Dashboard | 👤 User Application |
| --- | --- |
| Manage categories, food, users, and orders | Browse the menu, build a cart, and place orders |

---

## 🚀 Features

### 🔐 Authentication & Authorization

- User registration and login
- JWT-based authentication
- Protected routes (frontend and API)
- Role-based authorization (Admin / User)
- Admin account identified by a specific email; every other account is a normal user
- Invalid login credentials handling

### 👨‍💼 Admin vs 👤 User

| 👨‍💼 Admin Dashboard | 👤 User Application |
| --- | --- |
| 📂 Add, view, and delete **categories** | 🏠 Browse the home page and categories |
| 🍔 Add, view, and delete **food items** | 🍕 View food by category (image, name, description, price) |
| 🖼️ Upload food images | 🛒 Add items to the cart |
| 👥 View registered users and their info | 🧮 Automatic total price calculation |
| 📦 View all orders and purchased products | 📄 Services page |
| 💰 See order totals and order details | 📞 Contact page |

### 📂 Categories

Food items are displayed according to their assigned category.

> 🍕 Pizza • 🥤 Drinks • 🍔 Burgers • 🍽️ Dishes • 🥗 Salads • 🍲 Soups • 🍰 Desserts

### 🍔 Food Item Fields

```text
Name  |  Image  |  Price  |  Description  |  Category
```

### 🛒 Cart Example

| Product | Price | Quantity | Total |
| ------- | ----: | -------: | ----: |
| Pizza   |   $10 |        2 |   $20 |
| Burger  |    $8 |        1 |    $8 |
| **Total** |     |          | **$28** |

---

## 📸 Screenshots

> Put your images inside a `screenshots/` folder with these names (or change the paths below).

### 👤 User Application

| Home | Categories | Food |
| :---: | :---: | :---: |
| <img src="./screenshots/home.png" width="280" /> | <img src="./screenshots/categories.png" width="280" /> | <img src="./screenshots/food.png" width="280" /> |

| Cart | Login | Register |
| :---: | :---: | :---: |
| <img src="./screenshots/cart.png" width="280" /> | <img src="./screenshots/login.png" width="280" /> | <img src="./screenshots/register.png" width="280" /> |

### 👨‍💼 Admin Dashboard

| Dashboard | Food Management | Categories | Users |
| :---: | :---: | :---: | :---: |
| <img src="./screenshots/admin-dashboard.png" width="220" /> | <img src="./screenshots/admin-food.png" width="220" /> | <img src="./screenshots/admin-categories.png" width="220" /> | <img src="./screenshots/admin-users.png" width="220" /> |

---

## 🛠️ Tech Stack

### Frontend

<p>
  <img src="https://skillicons.dev/icons?i=react,tailwind,bootstrap,vite" height="48" alt="Frontend" />
</p>

- **React.js** — UI and reusable components
- **React Bootstrap** — Responsive UI components
- **Tailwind CSS** — Custom styling and responsive design
- **Font Awesome** — Icons
- **SweetAlert2** — Alerts and notifications

### Backend

<p>
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb" height="48" alt="Backend" />
</p>

- **Node.js** and **Express.js** — REST API
- **MongoDB** and **Mongoose** — Database and object modeling
- **JWT** — Authentication and authorization
- **Multer** — Image and file uploads
- **Validation** — User and application data checks

### Tools

<p>
  <img src="https://skillicons.dev/icons?i=git,github,postman,npm,vscode" height="48" alt="Tools" />
</p>

---

## 🏗️ Architecture

```mermaid
flowchart TB
  subgraph Frontend
    A[Auth: Login / Register]
    B[User: Home, Categories, Food, Cart, Services, Contact]
    C[Admin: Dashboard, Categories, Food, Users, Orders]
  end
  subgraph Backend
    D[Routes] --> E[Middleware]
    E --> F[Controllers]
    F --> G[Models]
  end
  H[(MongoDB)]
  Frontend -->|REST API| D
  G --> H
```

### 🔑 Authentication Flow

```mermaid
flowchart LR
  A[Register] --> B[Account Created] --> C[Login] --> D[JWT Token] --> E[Auth Middleware] --> F[Protected Routes]
```

```mermaid
flowchart LR
  A[Login] --> B{Admin email?}
  B -- Yes --> C[Admin]
  B -- No --> D[User]
```

### 🔄 Application Flow

**Admin**

```mermaid
flowchart LR
  A[Admin Login] --> B[Dashboard] --> C[Create Category] --> D[Create Food] --> E[Assign to Category] --> F[Appears in User App]
```

**User**

```mermaid
flowchart LR
  A[Register] --> B[Login] --> C[Browse Categories] --> D[View Food] --> E[Select Products] --> F[Cart] --> G[Total Calculated]
```

---

## 📁 Project Structure

<details>
<summary><b>Backend</b></summary>

```text
backend/
├── controllers/
│   ├── authController.js
│   ├── foodController.js
│   ├── categoryController.js
│   ├── userController.js
│   └── orderController.js
├── models/
│   ├── User.js
│   ├── Food.js
│   ├── Category.js
│   └── Order.js
├── routes/
│   ├── authRoutes.js
│   ├── foodRoutes.js
│   ├── categoryRoutes.js
│   ├── userRoutes.js
│   └── orderRoutes.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── database.js
└── server.js
```

</details>

<details>
<summary><b>Frontend</b></summary>

```text
frontend/
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── FoodCard
│   ├── Category
│   └── ...
├── pages/
│   ├── Home
│   ├── Login
│   ├── Register
│   ├── Services
│   ├── Contact
│   ├── Cart
│   └── Admin
├── context/
│   └── StoreContext
└── App.jsx
```

</details>

---

## 🔒 Security

- JWT authentication
- Protected API routes
- Authorization middleware
- Admin / User role separation
- Protected Admin Dashboard
- Server-side authorization checks

---

## ⚙️ Installation

**1. Clone the repository**

```bash
git clone https://github.com/omar-rehann/food-delivery-restaurant.git
cd food-delivery-restaurant
```

**2. Backend**

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

```bash
npm run dev
```

**3. Frontend** (in a new terminal)

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API

| Method | Endpoint | Description |
| :---: | --- | --- |
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and get a JWT |
| `POST` | `/api/category/add` | Add a category |
| `GET` | `/api/category/list` | List categories |
| `DELETE` | `/api/category/remove` | Delete a category |
| `POST` | `/api/food/addfood` | Add a food item |
| `GET` | `/api/food/list` | List food items |
| `PUT` | `/api/food/updatefood` | Update a food item |
| `DELETE` | `/api/food/removefood` | Delete a food item |
| `GET` | `/api/user/list` | List users (admin) |
| `GET` | `/api/order/list` | List orders (admin) |
| `POST` | `/api/order/create` | Create an order |

---

## 🎯 Project Goals

Built to practice and demonstrate real-world **MERN Stack** development:

- React frontend development and state management
- Node.js and Express REST APIs
- MongoDB database design
- Authentication and authorization
- CRUD operations and image uploads
- Admin dashboard, user, and order management

---

## 🚧 Future Improvements

- [ ] 💳 Online payment integration
- [ ] 📍 Order tracking
- [ ] 🔔 Notifications
- [ ] ⭐ Food reviews and ratings
- [ ] ❤️ Favorite products
- [ ] 📦 Advanced order status
- [ ] 📊 Advanced admin analytics
- [ ] 🔎 Food search
- [ ] 🏷️ Discounts and coupons

---

## 👨‍💻 Author

<p align="center">
  <b>Omar Rehan</b><br/>
  Full-Stack Developer
</p>

<p align="center">
  <a href="https://github.com/omar-rehann"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/omar-rehann"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://omar-rehann.github.io/Omar-Rehann/"><img src="https://img.shields.io/badge/Portfolio-0891B2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" /></a>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:7C2D12,50:EA580C,100:F59E0B&height=100&section=footer" width="100%" />
</p>