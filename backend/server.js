// // import express from 'express'
// // import cors from 'cors'
// // import 'dotenv/config'
// // import connectDB from './config/mongodb'

// // //App Config
// // const app=express()
// // const port=process.env.PORT || 4000

// // connectDB()

// // //middlewares

// // app.use(express.json())
// // app.use(cors())

// // //api endpoints

// // app.get('/',(req,res)=>{
// //     res.send("API Working")
// // })

// // app.listen(port,()=>console.log('Server Started on PORT : '+ port))





// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/mongodb.js';   // ← correct path + .js
// import connectCloudinary from './config/cloudinary.js';
// import userRouter from './routes/userRoute.js';
// import productRouter from './routes/productRoute.js';

// dotenv.config();

// const app  = express();
// const port = process.env.PORT || 4000;

// // connect database (await so we don’t start server before DB is ready)
//  await connectDB();            // top‑level await works in Node ≥14.8 when "type":"module"
// connectCloudinary();


// // middle‑wares
// app.use(express.json());
// app.use(cors());



// //api endpoints

// app.use('/api/user',userRouter)
// app.use('/api/product',productRouter)

// // routes
// app.get('/', (req, res) => {
//   res.send('API Working');
// });

// // start server
// app.listen(port, () => console.log(`🚀  Server started on PORT ${port}`));


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Connect to database
await connectDB(); // Top-level await (Node >= 14.8, with "type": "module" in package.json)
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// ✅ Serve uploads folder
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// API routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart',cartRouter);

app.use('/api/order',orderRouter);



// Root route
app.get('/', (req, res) => {
  res.send('API Working');
});

// Start server
app.listen(port, () => console.log(`🚀 Server started on PORT ${port}`));
