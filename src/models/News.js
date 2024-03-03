import mongoose from "mongoose"; 
import { required } from "nodemon/lib/config";

const NewsSchema = new mongoose.Schema({
    title:{
        type: String, 
        require: true,
    }, 
    text: {
        type: String, 
        require: true,
    }, 
    banner: {
        type: String, 
        require: true,
    }, 
    createdAt:{ 
        type: String, 
        default: Date.now(),
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true,
    }, 
    likes: {
        type: Array,
        require: true, 
    }, 
    comments: {
        type: Array,
        require: true,
    }, 
}); 

const News = mongoose.model("News", NewsSchema);

export default News;