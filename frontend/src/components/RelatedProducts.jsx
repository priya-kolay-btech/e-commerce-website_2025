// // import React, { useContext, useEffect, useState } from 'react'
// // import { ShopContext } from '../context/shopContext'
// // import Title from './Title';
// // import ProductItem from './ProductItem';

// // const RelatedProducts = ({categories,subCategories}) => {
// // const {products}=useContext(ShopContext);
// // const [related,setRelated]=useState('');
// // useEffect(()=>{

// // if(products.length>0){

// //     let productsCopy=products.slice();

// //     productsCopy=productsCopy.filter((item)=>categories===item.categories)
// //     productsCopy=productsCopy.filter((item)=>subCategories===item.subCategories)
  
// //     setRelated(productsCopy.slice(0,5));
// // }


// // },[products])

// //   return (
// //     <div className='my-24'>
// //       <div className='text-center text-3xl py-2'>
// //         <Title text1={'RELATED'} text2={'PRODUCTS'}  />
// //       </div>

// // <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
// // {related.map((item,index)=>(
// //     <ProductItem  key={index} id={item._id} name={item.name} price={item.price } image={item.image}  />
// // ))}
// // </div>


// //     </div>
// //   )
// // }

// // export default RelatedProducts

// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/shopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';

// const RelatedProducts = ({ categories, subCategories }) => {
//   const { products = [] } = useContext(ShopContext);

//   // must start as an array ➜ avoids .map crash
//   const [related, setRelated] = useState([]);

//   useEffect(() => {
//     if (!products.length) {
//       setRelated([]);
//       return;
//     }

//     const matches = products
//       .filter(
//         (p) =>
//           p.categories === categories && p.subCategories === subCategories
//       )
//       .slice(0, 5);

//     setRelated(matches);
//   }, [products, categories, subCategories]); // include the props too

//   if (!related.length) return null; // nothing to show

//   return (
//     <section className="my-24">
//       <header className="text-center text-3xl py-2">
//         <Title text1="RELATED" text2="PRODUCTS" />
//       </header>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {related.map(({ _id, name, price, image }) => (
//           <ProductItem
//             key={_id}
//             id={_id}
//             name={name}
//             price={price}
//             image={image}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RelatedProducts;


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/shopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';

// /**
//  * Props
//  * -----
//  * @param {string} category      current product.category
//  * @param {string} subCategory   current product.subCategory
//  * @param {string} currentId     current product._id – excluded from list
//  */
// const RelatedProducts = ({ category, subCategory, currentId }) => {
//   const { products = [] } = useContext(ShopContext);
//   const [related, setRelated] = useState([]);

//   useEffect(() => {
//     if (!products.length || !category || !subCategory) {
//       setRelated([]);
//       return;
//     }

//     const matches = products
//       .filter(
//         (p) =>
//           p._id !== currentId &&
//           p.category === category &&
//           p.subCategory === subCategory
//       )
//       .slice(0, 5);          // show at most 5

//     setRelated(matches);
//   }, [products, category, subCategory, currentId]);

//   if (!related.length) return null;            // nothing to show

//   return (
//     <section className="my-24">
//       <header className="text-center text-3xl py-2">
//         <Title text1="RELATED" text2="PRODUCTS" />
//       </header>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {related.map(({ _id, name, price, image }) => (
//           <ProductItem
//             key={_id}
//             id={_id}
//             name={name}
//             price={price}
//             image={image}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RelatedProducts;


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory, currentId }) => {
  const { products = [] } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    // Debug info
    console.log('RelatedProducts useEffect:', { productsCount: products.length, category, subCategory, currentId });

    if (!products.length || !category) {
      setRelated([]);
      return;
    }

    // More relaxed filter: match category only, exclude current product
    const matches = products
      .filter(p => p._id !== currentId && p.category === category)
      .slice(0, 5);

    // Optionally, try to filter by subCategory if provided and if matches found
    let filtered = matches;
    if (subCategory) {
      const subCatMatches = matches.filter(p => p.subCategory === subCategory);
      if (subCatMatches.length > 0) {
        filtered = subCatMatches;
      }
    }

    setRelated(filtered);
  }, [products, category, subCategory, currentId]);

  if (!related.length) return null;

  return (
    <section className="my-24">
      <header className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map(({ _id, name, price, image }) => (
          <ProductItem
            key={_id}
            id={_id}
            name={name}
            price={price}
            image={image}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
