import { model, models, Schema } from "mongoose";

const medtadataSchema = new Schema(
    {
        categories: [String],
    },
    { collection: "metadata" }
);

const Metadata = models.Metadata || model("Metadata", medtadataSchema);
export default Metadata;
