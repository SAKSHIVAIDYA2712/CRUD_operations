import express from "express";
import cors from "cors";
import mysql from "mysql";
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db1",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM customer";
  db.query(sql, (err, result) => {
    if (err) {
      res.json({ Message: "error inside server..." });
    } else {
      return res.json(result);
    }
  });
});

app.post("/cust", (req, res) => {
  const sql =
    "INSERT INTO customer (`name`,`phone`,`email`,`address`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.phone,
    req.body.email,
    req.body.address,
  ];
  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/update/:id", (req, res) => {
  const sql = "SELECT * FROM customer WHERE customer_id=?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "errorrr" });
    return res.json(result);
  });
});

app.put("/updatedata/:id", (req, res) => {
  const sql =
    "UPDATE customer SET `name`=?, `email`=? `phone`=? `address`=? WHERE customer_id=?";
  const id = req.params.id;
  db.query(
    sql,
    [req.body.name, req.body.phone, req.body.email, req.body.address, id],
    (err, result) => {
      if (err) return res.json({ Message: "error inside server" });
      return res.json(result);
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM customer WHERE customer_id=?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "error insde serverr" });
    return res.json(result);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
