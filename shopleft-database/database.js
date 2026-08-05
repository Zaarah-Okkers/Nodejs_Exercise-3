import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ShadowBella@home",
    database: "shopleft_database",
    port: 3307
});

connection.connect((err) => {
    if (err) {
        console.error("Connection failed: " + err.stack);
        return;
    }
    console.log("Connected to shopleft_database");
});

function getAllUsers() {
    connection.query("SELECT * FROM user", (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}

getAllUsers();

function getAllProducts() {
    connection.query("SELECT * FROM products", (err, results) => {
        if (err) throw err;
        //console.log(results);
    });
}

getAllProducts();

function deleteProduct(productCode) {
    connection.query("DELETE FROM products WHERE product_code = ?", [productCode], (err, results) => {
        if (err) throw err;
    //console.log(results);
    });
}

deleteProduct("baro1");

function insertProduct(code, name, price, quantity) {
    connection.query(
        "INSERT INTO products (product_code, product_name, product_price, product_quantity) VALUES (?, ?, ?, ?)",
        [code, name, price, quantity],
        (err, results) => {
            if (err) throw err;
        //console.log(results);
        }
    );
}

insertProduct("piza1", "Pizza", 45.99, 8);

function updateProduct(code, newPrice, newQuantity) {
    connection.query(
        "UPDATE products SET product_price = ?, product_quantity = ? WHERE product_code = ?",
        [newPrice, newQuantity, code],
        (err, results) => {
            if (err) throw err;
    console.log(results);
        }
    );
}

updateProduct("hand1", 21.50, 3);
