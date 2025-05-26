// import mongoose from "mongoose";


// const connectDB=async()=>{

// mongoose.connection.on('connected',()=>{
// console.log("DB Connected");
// })



//       await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
// }

// export default connectDB;

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();            // make sure .env is loaded here too

const connectDB = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}/e-commerce`,
      {
        // optional but recommended flags
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('✅  MongoDB connected');
  } catch (err) {
    console.error('❌  MongoDB connection error:', err.message);
    process.exit(1);        // stop the app if db fails
  }
};

export default connectDB;
