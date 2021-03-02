// console.log('hello');

import Express from "express";

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/", (req, res) => {
    res.send("Balance");
});

app.get("/", (req, res) => {
    res.send("Withdraw");
});

app.get("/", (req, res) => {
    res.send("Deposit");
});

app.listen(port, () => console.log("listening on the port" + port))