import { Schema } from "mongoose";

const fundingSchema = new Schema(
  {
    seller: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    title: {
      type: String,
      required: true,
    },
    mainImageUrl: {
      type: String,
      required: true,
    },
    imageUrls: [
      {
        type: String,
        required: true,
      },
    ],
    goalAmount: {
      type: Number,
      required: true,
    },
    currentAmount: {
      type: Number,
      default: 0,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    preorderDate: {
      type: String,
      default: true,
    },
    deliveryPrice: {
      type: Number,
      default: 0,
    },
    deliveryDate: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    infoDetail: {
      type: String,
      required: true,
    },
    options: [
      {
        optionId: {
          type: Schema.Types.ObjectId,
          ref: "Order",
        },
        title: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
        totalAmount: {
          type: Number,
          required: true,
        },
        currentAmount: {
          type: Number,
          default: 0,
        },
        info: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    collection: "funding",
    versionKey: false,
  }
);

export default fundingSchema;
