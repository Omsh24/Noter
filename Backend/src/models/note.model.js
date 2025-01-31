import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

noteSchema.plugin(mongooseAggregatePaginate)

export const Note = mongoose.model("Note", noteSchema);