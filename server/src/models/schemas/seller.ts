import { Schema } from "mongoose";

const sellerSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  companyName: {
    type: String,
    required: true,
  },
  businessLicense: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default sellerSchema;
