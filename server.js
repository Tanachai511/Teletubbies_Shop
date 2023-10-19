var express = require('express')
var cors = require('cors')
var app = express()

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '',
  database: 'tltb_shop'
});

var app = express()
app.use(cors())
app.use(express.json())


//customer
app.get('/customer', function (req, res, next) {
    connection.query(
        'SELECT * FROM `customer`',
        function(err, results, fields) {
          res.json(results);
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
})

app.get('/customer/:C_UserID', function (req, res, next) {
    const C_UserID = req.params.C_UserID;
    connection.query(
        'SELECT * FROM `customer` WHERE `C_UserID` = ?',
        [C_UserID],
        function(err, results) {
          res.json(results);
        }
      );
})

app.post('/customer', function (req, res, next) {
    connection.query(
        'INSERT INTO `customer` (`C_UserID`, `C_Username`, `C_Password`, `C_Name`, `C_Address`, `C_Phonenumber`, `C_Emaill`) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [req.body.C_UserID, req.body.C_Username, req.body.C_Password, req.body.C_Name, req.body.C_Address, req.body.C_Phonenumber, req.body.C_Emaill],
        function(err, results) {
          res.json(results);
        }
    );
})

app.put('/customer', function (req, res, next) {
    connection.query(
        'UPDATE `customer` SET `C_Username`=?, `C_Password`=?, `C_Name`=?, `C_Address`=?, `C_Phonenumber`=?, `C_Emaill`= ? WHERE C_UserID = ?',
        [req.body.C_Username, req.body.C_Password, req.body.C_Name, req.body.C_Address, req.body.C_Phonenumber, req.body.C_Emaill , req.body.C_UserID],
        function(err, results) {
          res.json(results);
        }
    );
})

app.delete('/customer', function (req, res, next) {
    connection.query(
        'DELETE FROM `customer` WHERE C_UserID = ?',
        [req.body.C_UserID],
        function(err, results) {
          res.json(results);
        }
    );
})


//Product
app.get('/product', function (req, res, next) {
    connection.query(
        'SELECT * FROM `product`',
        function(err, results, fields) {
          res.json(results);
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
})

app.get('/product/:Product_ID', function (req, res, next) {
    const Product_ID = req.params.Product_ID;
    connection.query(
        'SELECT * FROM `product` WHERE `Product_ID` = ?',
        [Product_ID],
        function(err, results) {
          res.json(results);
        }
      );
})

app.post('/product', function (req, res, next) {
    connection.query(
        'INSERT INTO `product` (`Product_ID`, `Product_Name`, `Product_Price`, `Product_Detail`, `Product_Quantity`, `Category_ID`) VALUES (?, ?, ?, ?, ?, ?)',
        [req.body.Product_ID, req.body.Product_Name, req.body.Product_Price, req.body.Product_Detail, req.body.Product_Quantity, req.body.Category_ID],
        function(err, results) {
          res.json(results);
        }
    );
})

app.put('/product', function (req, res, next) {
    connection.query(
        'UPDATE `product` SET `Product_Name`=?, `Product_Price`=?, `Product_Detail`=?, `Product_Quantity`=?, `Category_ID`=? WHERE Product_ID = ?',
        [req.body.Product_Name, req.body.Product_Price, req.body.Product_Detail, req.body.Product_Quantity, req.body.Category_ID, req.body.Product_ID],
        function(err, results) {
          res.json(results);
        }
    );
})

app.delete('/product', function (req, res, next) {
    connection.query(
        'DELETE FROM `product` WHERE Product_ID = ?',
        [req.body.Product_ID],
        function(err, results) {
          res.json(results);
        }
    );
})

//Cart
app.get('/cart', function (req, res, next) {
    connection.query(
        'SELECT * FROM `cart`',
        function(err, results, fields) {
          res.json(results);
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
})

app.get('/cart/:Cart_ID', function (req, res, next) {
    const Cart_ID = req.params.Cart_ID;
    connection.query(
        'SELECT * FROM `cart` WHERE `Cart_ID` = ?',
        [Cart_ID],
        function(err, results) {
          res.json(results);
        }
      );
})

app.post('/cart', function (req, res, next) {
    connection.query(
        'INSERT INTO `cart` (`Cart_ID`, `Cart_Price`, `Cart_Quantity`, `Cart_TotalPrice`) VALUES (?, ?, ?, ?)',
        [req.body.Cart_ID, req.body.Cart_Price, req.body.Cart_Quantity, req.body.Cart_TotalPrice],
        function(err, results) {
          res.json(results);
        }
    );
})

app.put('/cart', function (req, res, next) {
    connection.query(
        'UPDATE `cart` SET `Cart_Price`=?, `Cart_Quantity`=?, `Cart_TotalPrice`=? WHERE Cart_ID = ?',
        [req.body.Cart_Price, req.body.Cart_Quantity, req.body.Cart_TotalPrice, req.body.Cart_ID],
        function(err, results) {
          res.json(results);
        }
    );
})

app.delete('/cart', function (req, res, next) {
    connection.query(
        'DELETE FROM `cart` WHERE Cart_ID = ?',
        [req.body.Cart_ID],
        function(err, results) {
          res.json(results);
        }
    );
})

//Payment
app.get('/payment', function (req, res, next) {
    connection.query(
        'SELECT * FROM `payment`',
        function(err, results, fields) {
          res.json(results);
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
})

app.get('/payment/:Payment_ID', function (req, res, next) {
    const Payment_ID = req.params.Payment_ID;
    connection.query(
        'SELECT * FROM `payment` WHERE `Payment_ID` = ?',
        [Payment_ID],
        function(err, results) {
          res.json(results);
        }
      );
})

app.post('/payment', function (req, res, next) {
    connection.query(
        'INSERT INTO `payment` (`Payment_ID`, `Payment_Type`, `Payment_Date`, `Payment_Amount`, `Cart_ID`) VALUES (?, ?, ?, ?, ?)',
        [req.body.Payment_ID, req.body.Payment_Type, req.body.Payment_Date, req.body.Payment_Amount, req.body.Cart_ID],
        function(err, results) {
          res.json(results);
        }
    );
})

app.delete('/payment', function (req, res, next) {
    connection.query(
        'DELETE FROM `payment` WHERE Payment_ID = ?',
        [req.body.Payment_ID],
        function(err, results) {
          res.json(results);
        }
    );
})

//Category
app.get('/category', function (req, res, next) {
    connection.query(
        'SELECT * FROM `category`',
        function(err, results, fields) {
          res.json(results);
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
})

//Saller
app.get('/saller', function (req, res, next) {
    connection.query(
        'SELECT * FROM `saller`',
        function(err, results, fields) {
          res.json(results);
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
})



app.listen(8000, function () {
  console.log('CORS-enabled web server listening on port 8000')
})

