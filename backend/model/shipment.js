import {mongoose} from "mongoose";

const shipmentSchema = mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
    },
    status: {
        type: String,  
        enum: ['pending', 'in_transit', 'delivered', 'cancelled'],
        default: 'pending'  
    },
    trackingId: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

export default Shipment = mongoose.model("Shipment", shipmentSchema);