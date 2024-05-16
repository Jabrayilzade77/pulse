import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const ProductModel = mongoose.model("product", productsSchema);

app.get("/myapp", async (req, res) => {
  const products = await ProductModel.find();
  res.send(products);
});

app.get("/myapp/:id", async (req, res) => {
  const { id } = req.params;

  const products = await ProductModel.findById(id);
  res.send(products);
});

app.post("/myapp", async (req, res) => {
  const obj = req.body;
  const product = new ProductModel(obj);

  await product.save();
  res.send(product);
});

app.delete("/myapp/:id", async (req, res) => {
  const { id } = req.params;

  const products = await ProductModel.findByIdAndDelete(id);
  res.send(products);
});

mongoose
  .connect("mongodb+srv://bd813qhzt:bd813qhzt@yusif.8mey3yj.mongodb.net/")
  .then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
