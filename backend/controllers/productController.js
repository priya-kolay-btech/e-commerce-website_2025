
// import {v2 as cloudinary} from "cloudinary"
// import productModel from "../models/productModel.js";


// //function for add product

// // const addProduct=async(req,res)=>{

// // try {
// //     const {name,description,price,category,subCategory,sizes,bestseller}=req.body

// // const image1= req.files.image1   &&  req.files.image1[0];
// // const image2= req.files.image2   &&  req.files.image2[0];
// // const image3= req.files.image3   &&  req.files.image3[0];
// // const image4= req.files.image4   &&  req.files.image4[0];


// // const images=[image1,image2,image3,image4].filter((item)=> item!==undefined)


// // let imagesUrl=await Promise.all(
// //     images.map(async(item)=>{
// //               let result=await cloudinary.uploader.upload(item.path,{resource_type: 'image'});
// //               return result.secure_url
// //     })
// // )


// // const productData={
// // name,
// // description,
// // category,
// // subCategory,
// // price: Number(price),
// // bestseller: bestseller==="true" ? true : false,
// // sizes:JSON.parse(sizes),
// // image: imagesUrl,
// // date: Date.now()

// // }

// // console.log(productData);

// // const product=new productModel(productData);
// // await product.save();


// // res.json({success: true,message:"Product Added"})


// // } catch (error) {
// //     console.log(error);
    

// // res.json({success: false,message: error.message})
    
// // }


// // }



// export const addProduct = async (req, res) => {
//   try {
//     // Parse sizes array because frontend sends it as JSON string
//     const sizes = JSON.parse(req.body.sizes);

//     // Collect uploaded image file names into an array
//     const images = [];
//     if (req.files.image1) images.push(req.files.image1[0].filename);
//     if (req.files.image2) images.push(req.files.image2[0].filename);
//     if (req.files.image3) images.push(req.files.image3[0].filename);
//     if (req.files.image4) images.push(req.files.image4[0].filename);

//     if (images.length === 0) {
//       return res.status(400).json({ success: false, message: 'Please upload at least one image.' });
//     }

//     // Create new product
//     const newProduct = new productModel({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       image: images,
//       category: req.body.category,
//       subCategory: req.body.subCategory,
//       sizes: sizes,
//       bestseller: req.body.bestseller === 'true' || req.body.bestseller === true,
//       date: Date.now(),  // Automatically set current date
//     });

//     // Save product to DB
//     await newProduct.save();

//     res.status(201).json({ success: true, message: 'Product added successfully!' });
//   } catch (error) {
//     console.error('Error adding product:', error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// };


// //function for list products

// const listProducts=async(req,res)=>{
 
//     try {
//         const products=await productModel.find({});
//         res.json({success: true,products})
//     } catch (error) {
        
// console.log(error);
    

// res.json({success: false,message: error.message})

//     }

// }


// //function for removing product

// const removeProduct=async(req,res)=>{

//     try {
        
// await productModel.findByIdAndDelete(req.body.id)
// res.json({success:true,message:"Product Removed"})


//     } catch (error) {
//         console.log(error);
    

// res.json({success: false,message: error.message})
//     }
    
// }


// //function for single product info

// const singleProduct=async(req,res)=>{
 
//     try {
//         const {productId}=req.body
//         const product=await productModel.findById(productId)
//         res.json({success:true,product})
//     } catch (error) {
//         console.log(error);
    

// res.json({success: false,message: error.message})

        
//     }


// }


// export {listProducts,removeProduct,singleProduct};


import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Add product function



const addProduct = async (req, res) => {
  try {
    // Parse sizes array (frontend sends it as JSON string)
    const sizes = JSON.parse(req.body.sizes);

    // Collect uploaded image file names into an array
    const images = [];
    if (req.files.image1) images.push(req.files.image1[0].filename);
    if (req.files.image2) images.push(req.files.image2[0].filename);
    if (req.files.image3) images.push(req.files.image3[0].filename);
    if (req.files.image4) images.push(req.files.image4[0].filename);

    if (images.length === 0) {
      return res.status(400).json({ success: false, message: "Please upload at least one image." });
    }

    // Create new product document
    const newProduct = new productModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: images,
      category: req.body.category,
      subCategory: req.body.subCategory,
      sizes: sizes,
      bestseller: req.body.bestseller === "true" || req.body.bestseller === true,
      date: Date.now(),
    });

    await newProduct.save();

    res.status(201).json({ success: true, message: "Product added successfully!" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// List products function
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Remove product function
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Single product info function
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Export all controller functions together
export { addProduct, listProducts, removeProduct, singleProduct };
