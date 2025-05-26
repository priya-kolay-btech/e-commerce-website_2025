// import React, { useContext } from 'react'
// import { ShopContext } from '../context/shopContext'
// import Title from './Title';

// const CartTotal = () => {
// const {currency,delivery_fee,getCartAmount}=useContext(ShopContext);


//   return (
//     <div className='w-full'>
//         <div className='text-2xl '>
// <Title text1={'CART'} text2={'TOTALS'}  />

//         </div>
      
// <div className='flex flex-col gap-2 mt-2 text-sm'>
// <div className='flex justify-between'> 
// <p>Subtotal</p>
// <p>{currency} {getCartAmount()}.00 </p>

// </div>
// <hr />
// <div className='flex justify-between'>
// <p>Shipping</p>
// <p>{currency} {delivery_fee}.00  </p>
// </div>
// <hr/>


// <div className='flex justify-between'>
// <b>Total</b>
// <b>{currency},{getCartAmount()===0 ? 0 : getCartAmount()+delivery_fee}.00  </b>

// </div>
// </div>

//     </div>
//   )
// }

// export default CartTotal


import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from './Title';
import { Link } from 'react-router-dom';

const CartTotal = () => {
  const {
    cartItems,
    products,
    currency,
    delivery_fee,
    getCartAmount,
    backendUrl,
  } = useContext(ShopContext);

  const total = getCartAmount() + (getCartAmount() === 0 ? 0 : delivery_fee);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      {/* Cart Item Preview */}
      <div className="mt-4">
        {Object.entries(cartItems).length === 0 && (
          <p className="text-gray-500 text-sm">Your cart is empty.</p>
        )}

        {Object.entries(cartItems).map(([productId, sizes]) => {
          const product = products.find((p) => p._id === productId);
          if (!product) return null;

          return Object.entries(sizes).map(([size, quantity]) => {
            const imageUrl =
              product.image?.[0]
                ? `${backendUrl}/uploads/${product.image[0]}`
                : '/fallback-image.png';

            return (
              <div
                key={`${productId}-${size}`}
                className="flex gap-4 items-center border p-2 rounded-lg mb-3"
              >
                <img
                  src={imageUrl}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex flex-col gap-1">
                  <Link to={`/product/${productId}`}>
                    <p className="font-medium">{product.name}</p>
                  </Link>
                  <p className="text-sm text-gray-500">Size: {size}</p>
                  <p className="text-sm text-gray-600">
                    {currency}{product.price} × {quantity}
                  </p>
                </div>
              </div>
            );
          });
        })}
      </div>

      {/* Totals Section */}
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>
            {currency} {getCartAmount() === 0 ? 0 : delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between font-bold">
          <b>Total</b>
          <b>
            {currency} {total}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
