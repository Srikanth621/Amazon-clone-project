const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HgRquEkiUIB2W4Zgbvrz8luc17TRtYR9FuVrGNPXcgS8pKpkXriC4SmcbCOfLoTejbcYfUmgsr03FMMsR10FJbq00ahUdU0ZP"
);

//API

//app Config

const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routers
app.get("/", (req, res) => {
  res.status(200).send("hello madhu");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "INR",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen commans
exports.api = functions.https.onRequest(app);

// http://localhost:5001/e-clone-7bb63/us-central1/api
