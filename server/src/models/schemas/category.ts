import { Schema } from 'mongoose';

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'categories',
    versionKey: false,
  }
);
export default categorySchema;
