// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/shopContext'
// import Title from '../components/Title';
// import { assets } from '../assets/assets';

// const Cart = () => {
// const {products,currency,cartItems}=useContext(ShopContext);
// const [cartData,setCartData]=useState([]);

// useEffect(()=>{
// const tempData=[];
// for(const items in cartItems){
//   for(const item in cartItems[items]){

//     if(cartItems[items][item]>0){
//       tempData.push({
//         _id:items,
//         size:item,
//         quantity:cartItems[items][item]
//       })
//     }
//   }
// }
// setCartData(tempData);


// },[cartItems])


//   return (
//     <div className='border-t pt-14'>
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'}  />
//       </div>

// <div>
//   {
//     cartData.map((item,index)=>{
//       const productData=products.find((product)=>product._id===item._id);
//       return(
//         <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'  >
// <div className='flex items-start gap-6'>
//   <img className='w-16 sm:w-20'   src={productData.image[0]} alt=""  />
// <div>
// <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
// <div className='flex items-center gap-5 mt-2'>
// <p>{currency}{productData.price}</p>
// <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
// </div>
// </div>
// </div>

// <input className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
//        <img className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.delete_icon} alt="" />
       
//         </div>
//       )
//     })
//   }
// </div>


      
//     </div>
//   )
// }

// export default Cart


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/shopContext';
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// const Cart = () => {
//   const { products, currency, cartItems,updateQuantity,navigate } = useContext(ShopContext); // ✅ cartItems
//   const [cartData, setCartData] = useState([]);

//   /* -------- build an array of { _id, size, quantity } whenever cart changes -------- */
//   useEffect(() => {
//     const list = [];

//     for (const productId in cartItems) {
//       for (const size in cartItems[productId]) {
//         const qty = cartItems[productId][size];
//         if (qty > 0) {
//           list.push({ _id: productId, size, quantity: qty });
//         }
//       }
//     }

//     setCartData(list);
//   }, [cartItems]);

//   /* --------------------------- RENDER --------------------------- */
//   return (
//     <div className="border-t pt-14">
//       <div className="text-2xl mb-3">
//         <Title text1="YOUR" text2="CART" />
//       </div>

//       {cartData.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         cartData.map((item, idx) => {
//           const product = products.find(p => p._id === item._id);
//           if (!product) return null; // guard

//           return (
//             <div
//               key={`${item._id}-${item.size}`}
//               className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.6fr_0.6fr] sm:grid-cols-[4fr_1.5fr_0.6fr] items-center gap-4"
//             >
//               {/* product info */}
//               <div className="flex items-start gap-6">
//                 <img
//                   src={product.image[0]}
//                   alt={product.name}
//                   className="w-16 sm:w-20"
//                 />
//                 <div>
//                   <p className="text-xs sm:text-lg font-medium">{product.name}</p>
//                   <div className="flex items-center gap-5 mt-2">
//                     <p>
//                       {currency}
//                       {product.price}
//                     </p>
//                     <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
//                       {item.size}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* qty input (no handler yet) */}
//               <input onChange={(e)=>e.target.value==='' || e.target.value==='0 '? null : updateQuantity(item._id,item.size,Number(e.target.value))}
//                 type="number"
//                 min={1}
//                 defaultValue={item.quantity}
//                 className="border w-12 sm:w-20 px-1 sm:px-2 py-1"
//               />

//               {/* delete icon placeholder */}
//               <img onClick={()=>updateQuantity(item._id,item.size,0)}
//                 src={assets.delete_icon}
//                 alt="delete"
//                 className="w-4 sm:w-5 cursor-pointer mr-2"
//               />
//             </div>
//           );
//         })
//       )}
 
//  <div className='flex justify-end my-20 '>
//   <div className='w-full sm:w-[450px]'>
//     <CartTotal/>
//     <div className='w-full text-end'>
//       <button onClick={()=>navigate('/placeorder')} className='bg-black text-white text-sm: my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
//     </div>

//   </div>

//  </div>

//     </div>
//   );
// };

// export default Cart;


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, backendUrl } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // Build an array of cart items whenever cart changes
  useEffect(() => {
    const list = [];

    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        const qty = cartItems[productId][size];
        if (qty > 0) {
          list.push({ _id: productId, size, quantity: qty });
        }
      }
    }

    setCartData(list);
  }, [cartItems,products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>

      {cartData.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cartData.map((item) => {
          const product = products.find(p => p._id === item._id);
          if (!product) return null;

          const imageUrl = product.image?.[0]
            ? `${backendUrl}/uploads/${product.image[0]}`
            : '/fallback-image.png';

          return (
            <div
              key={`${item._id}-${item.size}`}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.6fr_0.6fr] sm:grid-cols-[4fr_1.5fr_0.6fr] items-center gap-4"
            >
              {/* product info */}
              <div className="flex items-start gap-6">
                <img
                  src={imageUrl}
                  alt={product.name}
                  className="w-16 sm:w-20"
                  onError={(e) => { e.target.src = '/fallback-image.png'; }}
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{product.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {product.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* qty input */}
              <input
                onChange={(e) =>
                  e.target.value === '' || e.target.value === '0'
                    ? null
                    : updateQuantity(item._id, item.size, Number(e.target.value))
                }
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="border w-12 sm:w-20 px-1 sm:px-2 py-1"
              />

              {/* delete icon */}
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.delete_icon}
                alt="delete"
                className="w-4 sm:w-5 cursor-pointer mr-2"
              />
            </div>
          );
        })
      )}

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/placeorder')}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
