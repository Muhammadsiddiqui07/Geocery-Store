import mongoose from "mongoose";
import chalk from "chalk";


mongoose.connect('mongodb+srv://muhammadsiddiqui1410:ms12345@cluster0.rdqtavi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(chalk.bgGreen.white(" MongoDB connected successfully")))
    .catch(err => console.error(chalk.red(" MongoDB connection error:"), err));

export default mongoose;
