require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const accounts = require("./models/accounts");

const { PORT = 3001, MONGO_URI = "mongodb://localhost:27017" } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/accounts", async function (req, res) {
  const newAccountInfo = req.body;
  const newAccount = await accounts.create(newAccountInfo);
  res.json(newAccount);
});
app.post("/api/accounts/login", async function (req, res) {
  const credentials = req.body;
  const foundAccount = await accounts.findOne(credentials);
  res.json(foundAccount);
});

app.get("/api/accounts", async function (req,res){
    const allAccounts = await accounts.find({})
    res.json(allAccounts)
})

app.get("/api/accounts/:id", async function(req, res){
    const account = await accounts.findById(req.params.id)
    res.json(account)
})

app.put("/api/accounts/:id/balance", async function(req, res){
    const account = await accounts.findById(req.params.id)
    const amount = req.body.amount
    if(amount < 0 && account.balance < Math.abs(amount)){
        res.sendStatus(400)
        return
    }
    account.balance += amount
    await account.save()
    console.log(account)
    res.json(account)
})

app.listen(PORT, function () {
  console.log("Listening on port " + PORT);
});
mongoose.connect(MONGO_URI)