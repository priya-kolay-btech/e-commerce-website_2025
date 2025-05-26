import userModel from "../models/userModel.js"



/*add product to user cart */
const addToCart=async(req,res)=>{


try {
    const {userId,itemId,size}=req.body

const userData=await userModel.findById(userId)
let cartData=await userData.cartData;


if (cartData[itemId]) {
    if (cartData[itemId][size]) {
        cartData[itemId][size]+=1

    }

    else{
        cartData[itemId][size]=1
    }



}

else{
    cartData[itemId]={}
    cartData[itemId][size]=1
}


await userModel.findByIdAndUpdate(userId,{cartData})
res.json({success:true,message: "Added to Cart"})



} catch (error) {
    console.log(error);
    res.json({success: false,message: error.message})
    
}


}


/*update user cart */
const updateCart=async(req,res)=>{


try {
    

const {userId,itemId,size,quantity}=req.body


const userData=await userModel.findById(userId)
let cartData=await userData.cartData;


cartData[itemId][size]=quantity


await userModel.findByIdAndUpdate(userId,{cartData})
res.json({success:true,message: "cart updated"})






} catch (error) {
    console.log(error);
    res.json({success: false,message: error.message})
}

    
}



/*get user cart data*/
const getUserCart=async(req,res)=>{

try {
    const {userId}=req.body
    const userData=await userModel.findById(userId)
let cartData=await userData.cartData;


res.json({success: true,cartData});



} catch (error) {
    console.log(error);
    res.json({success: false,message: error.message})
}

    
}


export{addToCart,updateCart,getUserCart}


// import userModel from "../models/userModel.js";

// /* Add product to user cart */
// const addToCart = async (req, res) => {
//   try {
//     const { userId, itemId, size } = req.body;

//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     let cartData = userData.cartData || {};

//     // Ensure nested structure
//     if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }

//     if (!cartData[itemId][size]) {
//       cartData[itemId][size] = 0;
//     }

//     cartData[itemId][size] += 1;

//     // Save updated cart
//     userData.cartData = cartData;
//     userData.markModified("cartData");
//     await userData.save();

//     res.json({ success: true, message: "Added to Cart" });

//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// /* Update user cart */
// const updateCart = async (req, res) => {
//   try {
//     const { userId, itemId, size, quantity } = req.body;

//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     let cartData = userData.cartData || {};

//     // Ensure nested structure
//     if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }

//     cartData[itemId][size] = quantity;

//     // Save updated cart
//     userData.cartData = cartData;
//     userData.markModified("cartData");
//     await userData.save();

//     res.json({ success: true, message: "Cart updated" });

//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// /* Get user cart data */
// const getUserCart = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     res.json({ success: true, cartData: userData.cartData || {} });

//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export { addToCart, updateCart, getUserCart };


// import userModel from "../models/userModel.js";

// // Add or increment product in cart
// const addToCart = async (req, res) => {
//   try {
//     const { userId, itemId, size } = req.body;
//     if (!userId || !itemId || !size) {
//       return res.json({ success: false, message: "Missing required fields" });
//     }

//     const userData = await userModel.findById(userId);
//     if (!userData) return res.json({ success: false, message: "User not found" });

//     let cartData = userData.cartData || {};

//     if (!cartData[itemId]) cartData[itemId] = {};
//     if (!cartData[itemId][size]) cartData[itemId][size] = 0;

//     cartData[itemId][size] += 1;

//     userData.cartData = cartData;
//     userData.markModified("cartData");
//     await userData.save();

//     res.json({ success: true, message: "Added to cart", cartData });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Update quantity of a product in cart
// const updateCart = async (req, res) => {
//   try {
//     const { userId, itemId, size, quantity } = req.body;
//     if (!userId || !itemId || !size || quantity === undefined) {
//       return res.json({ success: false, message: "Missing required fields" });
//     }

//     const userData = await userModel.findById(userId);
//     if (!userData) return res.json({ success: false, message: "User not found" });

//     let cartData = userData.cartData || {};
//     if (!cartData[itemId]) cartData[itemId] = {};

//     cartData[itemId][size] = quantity;

//     userData.cartData = cartData;
//     userData.markModified("cartData");
//     await userData.save();

//     res.json({ success: true, message: "Cart updated", cartData });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Get cart data for user
// const getUserCart = async (req, res) => {
//   try {
//     const { userId } = req.body;
//     if (!userId) return res.json({ success: false, message: "UserId required" });

//     const userData = await userModel.findById(userId);
//     if (!userData) return res.json({ success: false, message: "User not found" });

//     res.json({ success: true, cartData: userData.cartData || {} });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export { addToCart, updateCart, getUserCart };
