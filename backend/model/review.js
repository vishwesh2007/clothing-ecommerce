import { mongoose } from 'mongoose';

const reviewSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true,
        default: ""
    }
}, { timestamps: true });

export default Review = mongoose.model('Review', reviewSchema);