// import React, { useContext } from 'react'
// import { ShopContext } from '../context/shopContext'
// import { Link } from 'react-router-dom';

// const ProductItem = ({id,image,name,price}) => {
//     const {currency}=useContext(ShopContext);
//   return (
//    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
//    <div className='overflow-hidden'>
//     <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt=""/>
    
//    </div>
//    <p className='pt-3 pb-1 text-sm'>{name}</p>
//    <p className='text-sm font-medium'>{currency}{price}</p>
//    </Link>


//   )
// }

// export default ProductItem


import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency, backendUrl } = useContext(ShopContext);

  // Build full image URL for the first image
  const imageUrl = image.length > 0 ? `${backendUrl}/uploads/${image[0]}` : '/fallback-image.png';

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img 
          className='hover:scale-110 transition ease-in-out' 
          src={imageUrl} 
          alt={name || "Product image"} 
          onError={(e) => { e.target.src = '/fallback-image.png'; }} // fallback image if broken
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  );
}

export default ProductItem;
