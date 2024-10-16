const express = require("express");
const sql = require("sqlite3");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const PORT = 8080;

//creating database
const db = new sql.Database("./database.db", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database created ");
  }
});

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS ALL_PRODUCTS( NAME VARCHAR(50) NOT NULL, ID INTEGER PRIMARY KEY UNIQUE NOT NULL,QUANTITY INTEGER NOT NULL,PRICE INTEGER NOT NULL)",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("table ctested");
      }
    }
  );
});

// db.run("DROP TABLE SOLD_PRODUCTS");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS SOLD_PRODUCTS( NAME VARCHAR(50) NOT NULL, ID INTEGER  NOT NULL,QUANTITY INTEGER NOT NULL,PRICE INTEGER NOT NULL)",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("table ctested 2 ");
      }
    }
  );
});
//
//

app.get("/sold-products", (req, res) => {
  db.serialize(() => {
    db.all("SELECT * FROM SOLD_PRODUCTS", (err, row) => {
      if (err) {
        return res.json(err.message);
      }
      return res.json(row);
    });
  });
});

//
//
app.post("/sold-product/add/", (req, res) => {
  const { soldProductData } = req.body;
  console.log(soldProductData);
  db.serialize(() => {
    db.all(
      "SELECT * FROM ALL_PRODUCTS WHERE ID = ?",
      [soldProductData.ID],
      (err, row) => {
        if (err) {
          return res.json(err.message + " OR You entered more QUNTITY!");
        } else if (row && row.length) {
          var availableQuantity = row[0].QUANTITY;
          if (availableQuantity >= soldProductData.QUANTITY) {
            db.run(
              "INSERT INTO SOLD_PRODUCTS (NAME, ID, QUANTITY,PRICE ) VALUES (?,?,?,?)",
              [row[0].NAME, row[0].ID, soldProductData.QUANTITY, row[0].PRICE],
              (err) => {
                if (err) {
                  return res.json(err.message);
                } else {
                  db.run(
                    "UPDATE ALL_PRODUCTS SET QUANTITY = ? WHERE ID = ?",
                    [
                      availableQuantity - soldProductData.QUANTITY,
                      soldProductData.ID,
                    ],
                    (err) => {
                      if (err) {
                        return res.json(err);
                      } else {
                        console.log("update succefully...");
                      }
                    }
                  );
                  res.json("Product sold successfuly");
                  res.end();
                }
              }
            );
          } else {
            return res.json(
              `${soldProductData.QUANTITY - availableQuantity} product is less`
            );
          }
        } else {
          return res.json("Product is not available");
        }
      }
    );
  });
});

app.post("/product/add", (req, res) => {
  const { productData } = req.body;
  console.log(productData);
  db.serialize(() => {
    db.all(
      "SELECT * FROM ALL_PRODUCTS WHERE ID = ?",
      [productData.ID],
      (err, row) => {
        if (err) {
          return res.json(err.message);
        } else if (row && row.length) {
          return res.json("Data is already exists!");
        } else {
          db.run(
            "INSERT INTO ALL_PRODUCTS (NAME, ID, QUANTITY,PRICE ) VALUES (?,?,?,?)",
            [
              productData.NAME,
              productData.ID,
              productData.QUANTITY,
              productData.PRICE,
            ],
            (err) => {
              if (err) {
                return res.json(err.message);
              } else {
                return res.json("Product add successfuly");
              }
            }
          );
        }
      }
    );
  });
});

app.get("/products", (req, res) => {
  db.serialize(() => {
    db.all("SELECT * FROM ALL_PRODUCTS", (err, row) => {
      if (err) {
        return res.json(err.message);
      }
      return res.json(row);
    });
  });
});

app.patch("/product/update", (req, res) => {
  const { updatedData } = req.body;
  db.serialize(() => {
    db.run(
      "UPDATE ALL_PRODUCTS SET NAME=? , QUANTITY=?,PRICE=?  WHERE ID = ?",
      [
        updatedData.NAME,
        updatedData.QUANTITY,
        updatedData.PRICE,
        updatedData.ID,
      ],
      (err) => {
        if (err) {
          return res.json(err.message);
        }
        return res.json("Product update successfuly");
      }
    );
  });
});

app.delete("/product/delete/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM ALL_PRODUCTS WHERE ID = ?", [id], (err) => {
    if (err) {
      return res.json(err.message);
    }
    return res.json("deleted");
  });
});

app.delete("/products/delete", (req, res) => {
  db.run("DELETE FROM ALL_PRODUCTS", (err) => {
    if (err) {
      return res.json(err.message);
    }
    return res.json("All products deleted successful");
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("http://localhost:8080/");
  }
});
