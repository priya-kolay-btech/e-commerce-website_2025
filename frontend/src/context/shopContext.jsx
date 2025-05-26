// // // // import { createContext, useEffect, useState } from "react";
// // // // import { products } from "../assets/assets";
// // // // import { toast } from "react-toastify";
// // // // export const ShopContext=createContext();
// // // // const ShopContextProvider=(props)=>{

// // // // const currency='$';
// // // // const delivery_fee=10;
// // // // const [search,setSearch]=useState('');
// // // // const [showSearch,setShowSearch]=useState(false);
// // // // const[cartItems,setCartItems]=useState({});

// // // // const addToCart=async(itemId,size)=>{

// // // // if(!size){
// // // // toast.error('Select Product Size');
// // // // return;
// // // // }

// // // // let cartData=structuredClone(carItems);
// // // // if(cartData[itemId]){
// // // //     if(cartData[itemId][size]){
// // // //         cartData[itemId][size]+=1;
// // // //     }
// // // //     else{
// // // //         cartData[itemId][size]=1;
// // // //     }

// // // // }

// // // // else{
// // // //     cartData[itemId]={};
// // // //     cartData[itemId][size]=1;
// // // // }

// // // // setCartItems(cartData);
// // // // }

// // // // // const getCartCount=()=>{
// // // // //     let totalCount=0;
// // // // //     for(const items in carItems){
// // // // //         for(const item in carItems[items]){
// // // // //             try {
// // // // //                 if(carItems[items][item]>0){
// // // // // totalCount+=carItems[item][item];
// // // // //                 }
// // // // //             } catch (error) {
                
// // // // //             }
// // // // //         }
// // // // //     }
// // // // //     return totalCount;
// // // // // }

// // // // const getCartCount = () => {
// // // //   let totalCount = 0;
// // // //   for (const productId in cartItems) {
// // // //     for (const size in cartItems[productId]) {
// // // //       if (cartItems[productId][size] > 0) {
// // // //         totalCount += cartItems[productId][size];
// // // //       }
// // // //     }
// // // //   }
// // // //   return totalCount;
// // // // };

// // // // // useEffect(()=>{
// // // // // console.log(carItems);
// // // // // },[carItems])


// // // //     const value={
// // // // products,currency,delivery_fee,
// // // // search,setSearch,showSearch,setShowSearch,
// // // // cartItems,addToCart,
// // // // getCartCount
// // // //     }
// // // //     return(
// // // //         <ShopContext.Provider value={value}>
// // // //             {props.children}

// // // //         </ShopContext.Provider>
// // // //     )
// // // // }

// // // // export default ShopContextProvider;


// // // import { createContext, useEffect, useState } from 'react';
// // // //import { products } from '../assets/assets';
// // // import { toast } from 'react-toastify';
// // // import { useNavigate } from 'react-router-dom';
// // // import axios from 'axios'

// // // export const ShopContext = createContext();

// // // const ShopContextProvider = ({ children }) => {
// // //   const currency = '$';
// // //   const delivery_fee = 10;

// // // const backendUrl=import.meta.env.VITE_BACKEND_URL

// // //   const [search, setSearch] = useState('');
// // //   const [showSearch, setShowSearch] = useState(false);
  
// // //   const [products,setProducts]=useState([]);
// // //   const [cartItems, setCartItems] = useState({});   // ✅ correct spelling everywhere
// // // const navigate=useNavigate();
// // //   /* ----------------- CART OPERATIONS ----------------- */

// // //   const addToCart = (itemId, size) => {
// // //     if (!size) {
// // //       toast.error('Select Product Size');
// // //       return;
// // //     }

// // //     // clone current cart
// // //     const cartData = structuredClone(cartItems);

// // //     // increment or create the entry
// // //     cartData[itemId] = cartData[itemId] || {};
// // //     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

// // //     setCartItems(cartData);
// // //   };

// // //   const getCartCount = () => {
// // //     let total = 0;
// // //     for (const productId in cartItems) {
// // //       for (const size in cartItems[productId]) {
// // //         total += cartItems[productId][size];
// // //       }
// // //     }
// // //     return total;
// // //   };


// // // const updateQuantity=async(itemId,size,quantity)=>{
// // // let cartData=structuredClone(cartItems);
// // // cartData[itemId][size]=quantity;
// // // setCartItems(cartData);
// // // }


// // // const getCartAmount= ()=>{
// // //     let totalAmount=0;
// // //     for(const items in cartItems){
// // //         let itemInfo=products.find((product)=>product._id===items);
// // //         for(const item in cartItems[items]){
// // //             try {
// // //                 if(cartItems[items][item]>0){
// // // totalAmount +=itemInfo.price * cartItems[items][item];
// // //                 }
// // //             } catch (error) {
                
// // //             }
// // //         }
// // //     }

// // //     return totalAmount;
// // // }


// // // const getProductsData=async()=>{
// // //   try {
// // //     const response=await axios.get(backendUrl+ '/api/product/list')
// // //     if(response.data.success){
// // //       setProducts(response.data.products)
// // //     }else{
// // //       toast.error(response.data.message)
// // //     }
    
// // //   } catch (error) {
// // //    console.log(error);
// // //     toast.error(error.message);
// // //   }
// // // }


// // // useEffect(() => {
// // //   getProductsData()

// // // }, [])

// // //   /* ----------------- PROVIDER VALUE ----------------- */

// // //   const value = {
// // //     products,
// // //     currency,
// // //     delivery_fee,
// // //     search,
// // //     setSearch,
// // //     showSearch,
// // //     setShowSearch,
// // //     cartItems,        
// // //     addToCart,
// // //     getCartCount,
// // //     updateQuantity,
// // //     getCartAmount,navigate,
// // //     backendUrl
// // //   };

// // //   return (
// // //     <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
// // //   );
// // // };

// // // export default ShopContextProvider;


// // // context/ShopContextProvider.jsx

// // import { createContext, useEffect, useState } from 'react';
// // import { toast } from 'react-toastify';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // export const ShopContext = createContext();

// // const ShopContextProvider = ({ children }) => {
// //   const currency = '$';
// //   const delivery_fee = 10;
// //   const backendUrl = import.meta.env.VITE_BACKEND_URL;

// //   const [search, setSearch] = useState('');
// //   const [showSearch, setShowSearch] = useState(false);
// //   const [products, setProducts] = useState([]);
// //   const [cartItems, setCartItems] = useState({});
// //   const [token,setToken]=useState('');
// //   const navigate = useNavigate();

// //   const addToCart = (itemId, size) => {
// //     if (!size) {
// //       toast.error('Select Product Size');
// //       return;
// //     }
// //     const cartData = structuredClone(cartItems);
// //     cartData[itemId] = cartData[itemId] || {};
// //     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
// //     setCartItems(cartData);
// //   };

// //   const updateQuantity = (itemId, size, quantity) => {
// //     const cartData = structuredClone(cartItems);
// //     cartData[itemId][size] = quantity;
// //     setCartItems(cartData);

// //     if (token) {
// //       try {
// //         await axios.post(backendUrl+'/api/cart/add',{itemId,size},{headers:{token}})
// //       } catch (error) {
// //         console.log(error);
// //         toast.error(error.message)
// //       }
// //     }
// //   };




// //   const getCartCount = () => {
// //     let total = 0;
// //     for (const productId in cartItems) {
// //       for (const size in cartItems[productId]) {
// //         total += cartItems[productId][size];
// //       }
// //     }
// //     return total;
// //   };

// //   const getCartAmount = () => {
// //     let totalAmount = 0;
// //     for (const itemId in cartItems) {
// //       const product = products.find((p) => p._id === itemId);
// //       if (!product) continue;
// //       for (const size in cartItems[itemId]) {
// //         totalAmount += product.price * cartItems[itemId][size];
// //       }
// //     }
// //     return totalAmount;
// //   };

// //   const getProductsData = async () => {
// //     try {
// //       const response = await axios.get(`${backendUrl}/api/product/list`);
// //       if (response.data.success) {
// //         setProducts(response.data.products);
// //       } else {
// //         toast.error(response.data.message);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       toast.error(error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     getProductsData();
// //   }, []);

// //   useEffect(()=>{
// // if (!token && localStorage.getItem('token')) {
// //   setToken(localStorage.getItem('token'))
// // }
// //   },[]);

// //   const value = {
// //     products,
// //     currency,
// //     delivery_fee,
// //     search,
// //     setSearch,
// //     showSearch,
// //     setShowSearch,
// //     cartItems,
// //     addToCart,
// //     getCartCount,
// //     updateQuantity,
// //     getCartAmount,
// //     navigate,
// //     backendUrl,
// //     setToken,token
// //   };

// //   return (
// //     <ShopContext.Provider value={value}>
// //       {children}
// //     </ShopContext.Provider>
// //   );
// // };

// // export default ShopContextProvider;





// import { createContext, useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const currency = '$';
//   const delivery_fee = 10;
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [search, setSearch] = useState('');
//   const [showSearch, setShowSearch] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [cartItems, setCartItems] = useState({});
//   const [token, setToken] = useState('');
//   const navigate = useNavigate();

//   const addToCart = (itemId, size) => {
//     if (!size) {
//       toast.error('Select Product Size');
//       return;
//     }
//     const cartData = structuredClone(cartItems);
//     cartData[itemId] = cartData[itemId] || {};
//     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
//     setCartItems(cartData);
//   };

//   const updateQuantity = async (itemId, size, quantity) => {
//     const cartData = structuredClone(cartItems);
//     cartData[itemId][size] = quantity;
//     setCartItems(cartData);

//     if (token) {
//       try {
//         await axios.post(`${backendUrl}/api/cart/add`, { itemId, size }, { headers: { token } });
//       } catch (error) {
//         console.log(error);
//         toast.error(error.message);
//       }
//     }
//   };

//   const getCartCount = () => {
//     let total = 0;
//     for (const productId in cartItems) {
//       for (const size in cartItems[productId]) {
//         total += cartItems[productId][size];
//       }
//     }
//     return total;
//   };

//   const getCartAmount = () => {
//     let totalAmount = 0;
//     for (const itemId in cartItems) {
//       const product = products.find((p) => p._id === itemId);
//       if (!product) continue;
//       for (const size in cartItems[itemId]) {
//         totalAmount += product.price * cartItems[itemId][size];
//       }
//     }
//     return totalAmount;
//   };

//   const getProductsData = async () => {
//     try {
//       const response = await axios.get(`${backendUrl}/api/product/list`);
//       if (response.data.success) {
//         setProducts(response.data.products);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     getProductsData();
//   }, []);

//   useEffect(() => {
//     if (!token && localStorage.getItem('token')) {
//       setToken(localStorage.getItem('token'));
//     }
//   }, []);

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartItems,
//     addToCart,
//     getCartCount,
//     updateQuantity,
//     getCartAmount,
//     navigate,
//     backendUrl,
//     setToken,
//     token,
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;


import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL; // your backend base URL

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(""); // store userId here for API calls
  const navigate = useNavigate();

  // Fetch products list from backend
  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  // Fetch cart data from backend for logged in user
  const fetchCartData = async () => {
    if (!userId) return;

    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        { userId },
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData || {});
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  // Add item to cart both locally and backend
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    // Update local cart
    const updatedCart = structuredClone(cartItems);
    updatedCart[itemId] = updatedCart[itemId] || {};
    updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
    setCartItems(updatedCart);

    // Sync with backend if logged in
    if (token && userId) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { userId, itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    }
  };

  // Update quantity locally and sync with backend
  const updateQuantity = async (itemId, size, quantity) => {
    const updatedCart = structuredClone(cartItems);
    updatedCart[itemId] = updatedCart[itemId] || {};
    updatedCart[itemId][size] = quantity;
    setCartItems(updatedCart);

    if (token && userId) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { userId, itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    }




  };



//   const getUserCart=async(token)=>{
//     try {
//       const response=await axios.post(backendUrl+'/api/cart/get',{},{headers: {token}})


// if (response.data.success) {
//   setCartItems(response.data.cartData)
// }

//     } catch (error) {
//       console.error(error);
//         toast.error(error.message);
//     }
//   }



const getUserCart = async (token) => {
  try {
    const userId = localStorage.getItem("userId"); // Make sure to include this
    const response = await axios.post(
      backendUrl + "/api/cart/get",
      { userId }, // Pass userId here
      { headers: { token } }
    );

    if (response.data.success) {
      setCartItems(response.data.cartData);
    }
  } catch (error) {
    console.error(error);
    toast.error(error.message);
  }
};


  // Count total items in cart
  const getCartCount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        total += cartItems[itemId][size];
      }
    }
    return total;
  };

  // Calculate total cart amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const product = products.find((p) => p._id === itemId);
      if (!product) continue;
      for (const size in cartItems[itemId]) {
        totalAmount += product.price * cartItems[itemId][size];
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    // Load token and userId from localStorage on mount
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");

    if (storedToken) setToken(storedToken);
    if (storedUserId) setUserId(storedUserId);

    getUserCart(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (token && userId) {
      fetchCartData();
    }
  }, [token, userId]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,setCartItems,
    updateQuantity,
    getCartCount,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
    userId,
    setUserId,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
