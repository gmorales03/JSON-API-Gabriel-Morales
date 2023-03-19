import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/cleanAir", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;