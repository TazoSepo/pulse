import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("All transactions");
});

router.post("/", (req, res) => {
  res.send("Post transaction");
});

router.put("/:id", (req, res) => {
  res.send("Update transaction");
});

router.delete("/:id", (req, res) => {
  res.send("Remove transaction");
});

export default router;
