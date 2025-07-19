import express from "express";
import transactionRoutes from "./src/routes/transaction.js";

const app = express();

app.use("/transaction", transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
