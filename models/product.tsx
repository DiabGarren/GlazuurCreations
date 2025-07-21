import { model, models, Schema } from "mongoose";

const productSchema = new Schema(
    {
        productId: String,
        name: String,
        category: [String],
        size: String,
        qty: Number,
        colours: [{ name: String, id: String }],
        price: Number,
    },
    { collection: "products" }
);

const Product = models.Product || model("Product", productSchema);
export default Product;
