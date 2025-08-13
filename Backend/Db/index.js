import mongoose from "mongoose";


mongoose.connect('mongodb+srv://muhammadsiddiqui1410:ms12345@cluster0.rdqtavi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(" MongoDB connected successfully"))
    .catch(err => console.error(" MongoDB connection error:", err));

export default mongoose;
