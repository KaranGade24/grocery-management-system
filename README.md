# Grocery Management System with Authentication

## Introduction

This is a comprehensive web-based Grocery Management System designed to streamline inventory control and sales tracking. The application features a secure login system, a user-friendly interface for managing products, tracking sales, and viewing revenue. The project is organized into a clean folder structure, separating the backend API from the frontend public assets.

---

## Features

- **User Authentication:** Secure login system to protect the management interface.
- **Separated Backend and Frontend:** The backend API and frontend code are organized in separate `api` and `public` directories for better maintainability.
- **Product Management:** Add, update, and delete products from the inventory.
- **Inventory Control:** Keep track of product quantities and prices.
- **Sales Tracking:** Record product sales and automatically update inventory.
- **Revenue Calculation:** View a detailed list of sold products and calculate total revenue.
- **Dynamic UI:** A responsive and interactive single-page application for a seamless user experience.

---

## Technologies Used

### Backend (`api/`)

- **Node.js:** A JavaScript runtime environment for executing server-side code.
- **Express.js:** A minimal and flexible Node.js web application framework.
- **sqlite3:** A Node.js wrapper for the SQLite3 database.
- **cors:** A Node.js package for enabling Cross-Origin Resource Sharing.
- **nodemon:** A tool that helps develop Node.js based applications by automatically restarting the node application when file changes are detected.

### Frontend (`public/`)

- **HTML:** The standard markup language for creating web pages.
- **CSS:** A stylesheet language used for designing the presentation of the web pages.
- **JavaScript:** The programming language that enables interactive web pages and communication with the backend.

### Database (`api/`)

- **SQLite:** A self-contained, high-reliability, embedded, SQL database engine.

---

## Project Structure

```
.
├── vercel.json
├── README.md
├── api
│   ├── database.db
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
└── public
    ├── images
    │   ├── backgroundImg.jpg
    │   └── groceryBackgroundImage.jpg
    ├── login
    │   ├── images
    │   │   ├── fb.jpg
    │   │   ├── google.jpg
    │   │   └── twitter.jpg
    │   ├── loginPage.html
    │   ├── script.js
    │   └── style.css
    ├── fetchh.js
    ├── index.html
    ├── product_box.css
    ├── script.js
    └── style.css
```

### File-by-File Breakdown

- **`api/`**: This directory contains all the backend code.

  - **`index.js`**: The main backend file that sets up the Express server, connects to the SQLite database, and defines all API endpoints.
  - **`package.json`**: Contains backend project metadata, dependencies, and scripts.
  - **`database.db`**: The SQLite database file.

- **`public/`**: This directory contains all the frontend files that are served to the client.
  - **`index.html`**: The main application page for managing groceries.
  - **`login/loginPage.html`**: The initial login page for user authentication.
  - **`*.css`**: CSS files for styling the application.
  - **`*.js`**: JavaScript files for UI interactivity and API communication.
  - **`images/`**: Contains images for the application's frontend.

---

## API Endpoints

The backend provides the following RESTful APIs for managing the grocery inventory:

| Method | Endpoint                | Description                                        |
| ------ | ----------------------- | -------------------------------------------------- |
| POST   | `/login`                | Authenticates a user.                              |
| GET    | `/products`             | Fetches a list of all available products.          |
| POST   | `/product/add`          | Adds a new product to the inventory.               |
| PATCH  | `/product/update`       | Updates the details of an existing product.        |
| DELETE | `/product/delete/:id`   | Deletes a specific product from the inventory.     |
| DELETE | `/products/delete`      | Deletes all products from the inventory.           |
| GET    | `/sold-products`        | Retrieves a list of all sold products.             |
| POST   | `/sold-product/add`     | Marks a product as sold and updates the inventory. |
| DELETE | `/sold-products/delete` | Clears the entire history of sold products.        |

---

## How to Run the Project

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the backend directory:**
    ```bash
    cd git-clone/grocerymanagementsystem-/api
    ```
3.  **Install the backend dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
5.  **Open your browser and navigate to `http://localhost:8080/login` to use the application.**

---

## Default Login Credentials

For initial access, you can use the following default credentials:

- **Username:** `user`
- **Password:** `123`
