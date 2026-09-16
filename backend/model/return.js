import { mongoose } from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        reason: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        },
        refundAmount: {
            type: Number,
            required: true,
        }
    },
  { timestamps: true },
);

export default Review = mongoose.model("Review", reviewSchema);
