# Grocery Management System with Authentication

## Introduction

This is a comprehensive web-based Grocery Management System designed to streamline inventory control and sales tracking. The application features a secure login system, a user-friendly interface for managing products, tracking sales, and viewing revenue. It features a robust backend built with Node.js and Express.js, and a dynamic frontend developed using HTML, CSS, and JavaScript.

---

## Features

- **User Authentication:** Secure login system to protect the management interface.
- **Product Management:** Add, update, and delete products from the inventory.
- **Inventory Control:** Keep track of product quantities and prices.
- **Sales Tracking:** Record product sales and automatically update inventory.
- **Revenue Calculation:** View a detailed list of sold products and calculate total revenue.
- **Dynamic UI:** A responsive and interactive single-page application for a seamless user experience.

---

## Technologies Used

### Backend

- **Node.js:** A JavaScript runtime environment for executing server-side code.
- **Express.js:** A minimal and flexible Node.js web application framework.
- **sqlite3:** A Node.js wrapper for the SQLite3 database.
- **cors:** A Node.js package for enabling Cross-Origin Resource Sharing.

### Frontend

- **HTML:** The standard markup language for creating web pages.
- **CSS:** A stylesheet language used for designing the presentation of the web pages.
- **JavaScript:** The programming language that enables interactive web pages and communication with the backend.

### Database

- **SQLite:** A self-contained, high-reliability, embedded, SQL database engine.

---

## Project Structure

```
.
├── README.md
├── database.db
├── index.js
├── package-lock.json
├── package.json
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
    ├── fetch.js
    ├── index.html
    ├── product_box.css
    ├── script.js
    └── style.css
```

### File-by-File Breakdown

- **`index.js`**: The main backend file that sets up the Express server, connects to the SQLite database, and defines all API endpoints for user authentication, product management, and sales tracking.
- **`package.json`**: Contains project metadata and lists dependencies and scripts.
- **`database.db`**: The SQLite database file storing user credentials, product, and sales data.
- **`public/`**: Contains all static frontend files.
  - **`index.html`**: The main application page for managing groceries after logging in.
  - **`login/loginPage.html`**: The initial login page for user authentication.
  - **`style.css`, `product_box.css`, `login/style.css`**: CSS files for styling the application.
  - **`script.js`, `fetchh.js`, `login/script.js`**: JavaScript files for UI interactivity and API communication.
  - **`images/`**: Contains images for the main application and login page.

---

## API Endpoints

The backend provides the following RESTful APIs:

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
2.  **Navigate to the project directory:**
    ```bash
    cd git-clone/grocerymanagementsystem-
    ```
3.  **Install the dependencies:**
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

--
