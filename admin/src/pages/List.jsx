// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { backendUrl, currency } from '../App'
// import { toast } from 'react-toastify'

// const List = () => {

// const [list,setList]=useState([])


// const fetchList=async()=>{


// try {
//   const response=await axios.get(backendUrl + '/api/product/list')


// if (response.data.success) {
//   setList(response.data.products);
// }
// else{
//   toast.error(response.data.message)
// }



// } catch (error) {
//   console.log(error);
//   toast.error(error.message)
// }

// }

// useEffect(() => {
//   fetchList()

 
// }, [])




//   return (
//    <>
   
// <p className='mb-2'>All Products List</p>

// <div className='flex flex-col gap-2'>
// {/*---LIst Table Title */}



// <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>


// <b>Image</b>
// <b>Name</b>
// <b>Category</b>
// <b>Price</b>
// <b className='text-center' >Action</b>



// </div>

// {/*---product list */}

// {
//   list.map((item,index)=>(
// <div key={index}>
// <img src={item.image[0]} alt="" />


// <p>{item.name}</p>
// <p> {item.category} </p>
// <p> {currency} {item.price} </p>
// <p>X</p>


// </div>
//   ))
// }


// </div>

//    </>
//   )
// }

// export default List








// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { backendUrl, currency } from '../App';
// import { toast } from 'react-toastify';

// const List = () => {
//   const [list, setList] = useState([]);

//   const fetchList = async () => {
//     try {
//       const response = await axios.get(`${backendUrl}/api/product/list`);
//       if (response.data.success) {
//         setList(response.data.products);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to fetch product list.");
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   return (
//     <>
//       <p className='mb-2 font-semibold text-lg'>All Products List</p>

//       <div className='flex flex-col gap-2'>
//         {/* Table Header */}
//         <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border bg-gray-100 text-sm font-semibold'>
//           <span>Image</span>
//           <span>Name</span>
//           <span>Category</span>
//           <span>Price</span>
//           <span className='text-center'>Action</span>
//         </div>

//         {/* Product List */}
//         {list.map((item, index) => (
//           <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border-b text-sm'>
//             <img
//               src={
//                 item.image && item.image[0]
//                   ? `${backendUrl}/${item.image[0]}`
//                   : '/default-product.png'
//               }
//               alt={item.name}
//               className='h-12 w-12 object-cover rounded'
//               onError={(e) => {
//                 e.target.src = '/default-product.png'; // Fallback image if image fails to load
//               }}
//             />
//             <p>{item.name}</p>
//             <p>{item.category}</p>
//             <p>{currency}{item.price}</p>
//             <p className='text-red-500 text-center cursor-pointer'>X</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default List;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch product list.");
    }
  };


const removeProduct=async(id)=>{
try {
  
const response=await axios.post(backendUrl+'/api/product/remove',{id},{headers:{token}})
if(response.data.success){
  toast.success(response.data.message)
  await fetchList();
}
else{
  toast.error(response.data.message)
}


} catch (error) {
  
console.log( error);
      toast.error(error.message)

}

}


  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className='mb-2 font-semibold text-lg'>All Products List</p>

      <div className='flex flex-col gap-2'>
        {/* Table Header */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border bg-gray-100 text-sm font-semibold'>
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className='text-center'>Action</span>
        </div>

        {/* Product List */}
        {list.map((item, index) => (
          <div
            key={index}
            className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border-b text-sm'
          >
            <img
              src={
                item.image[0]?.startsWith('http')
                  ? item.image[0] // Cloudinary or external URL
                  : `${backendUrl}/uploads/${item.image[0]}` // Local image
              }
              alt={item.name}
              className='h-12 w-12 object-cover rounded'
              onError={(e) => {
                e.target.src = '/default-product.png'; // fallback image
              }}
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <p  onClick={()=>removeProduct(item._id)} className='text-red-500 text-center cursor-pointer'>X</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;




















































// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// // import { backendUrl, currency } from '../App';
// // import { toast } from 'react-toastify';

// // const List = () => {
// //   const [list, setList] = useState([]);

// //   const fetchList = async () => {
// //     try {
// //       const response = await axios.get(backendUrl + '/api/product/list');

// //       if (response.data.success) {
// //         setList(response.data.products);
// //       } else {
// //         toast.error(response.data.message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchList();
// //   }, []);

// //   return (
// //     <>
// //       <p className='mb-2'>All Products List</p>

// //       <div className='flex flex-col gap-2'>
// //         {/* Table Header */}
// //         <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
// //           <b>Image</b>
// //           <b>Name</b>
// //           <b>Category</b>
// //           <b>Price</b>
// //           <b className='text-center'>Action</b>
// //         </div>

// //         {/* Product List */}
// //         {list.map((item, index) => (
// //           <div
// //             key={index}
// //             className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-2 border text-sm'
// //           >
// //             <img
// //               src={item.image[0]}
// //               alt={item.name}
// //               className='w-12 h-12 object-cover rounded'
// //               onError={(e) => {
// //                 e.target.src = '/placeholder.png'; // optional fallback
// //               }}
// //             />
// //             <p>{item.name}</p>
// //             <p>{item.category}</p>
// //             <p>
// //               {currency} {item.price}
// //             </p>
// //             <p className='text-center'>X</p>
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default List;


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { backendUrl, currency } from '../App'
// import { toast } from 'react-toastify'

// const List = () => {
//   const [list, setList] = useState([])

//   const fetchList = async () => {
//     try {
//       const response = await axios.get(`${backendUrl}/api/product/list`)
//       if (response.data.success) {
//         setList(response.data.products)
//       } else {
//         toast.error(response.data.message)
//       }
//     } catch (error) {
//       console.error(error)
//       toast.error(error.message)
//     }
//   }

//   useEffect(() => {
//     fetchList()
//   }, [])

//   return (
//     <>
//       <p className='mb-4 text-lg font-semibold'>All Products List</p>

//       <div className='flex flex-col gap-2'>
//         {/* Table Header */}
//         <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-4 border bg-gray-100 text-sm font-medium'>
//           <span>Image</span>
//           <span>Name</span>
//           <span>Category</span>
//           <span>Price</span>
//           <span className='text-center'>Action</span>
//         </div>

//         {/* Product List */}
//         {
//           Array.isArray(list) && list.length > 0 ? (
//             list.map((item, index) => (
//               <div
//                 key={index}
//                 className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-4 border text-sm'
//               >
//                 <img
//                   src={
//                     item.image?.[0]
//                       ? `${backendUrl}/uploads/${item.image[0]}`
//                       : '/placeholder.png'
//                   }
//                   alt={item.name}
//                   className='w-12 h-12 object-cover rounded'
//                   onError={(e) => {
//                     e.target.onerror = null
//                     e.target.src = '/placeholder.png'
//                   }}
//                 />
//                 <p>{item.name}</p>
//                 <p>{item.category}</p>
//                 <p>{currency} {item.price}</p>
//                 <p className='text-center text-red-500 cursor-pointer'>X</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-center py-4">No products found.</p>
//           )
//         }
//       </div>
//     </>
//   )
// }

// export default List
