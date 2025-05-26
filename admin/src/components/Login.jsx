// // // // // // /**
// // // // // //  * The `Login` component in React handles user authentication by sending a POST request with email and
// // // // // //  * password, setting a token upon successful login, and displaying appropriate messages using
// // // // // //  * react-toastify.
// // // // // //  * @returns The `Login` component is being returned. It contains a form for logging in with email and
// // // // // //  * password fields. Upon submission, it makes a POST request to the backend API endpoint for admin
// // // // // //  * login. If the login is successful, it sets the token using the `setToken` function and displays a
// // // // // //  * success message using `toast.success`. If the login fails, it displays an error message using
// // // // // //  * `toast.error
// // // // // //  */
// // // // // // // import axios from 'axios';
// // // // // // // import React, { useState } from 'react'
// // // // // // // import { backendUrl } from '../App';
// // // // // // // import { toast } from 'react-toastify';

// // // // // // // const Login = ({setToken}) => {

// // // // // // // const [email,setEmail]=useState('');
// // // // // // // const [password,setPassword]=useState('');


// // // // // // // const onSubmitHandler=async (e) => {
// // // // // // //     try {
// // // // // // //         e.preventDefault();

// // // // // // // const response=await axios.post(backendUrl+ '/api/user/admin',{email,password})

// // // // // // // if (response.data.success) {
// // // // // // //     //localStorage.setItem('token', response.data.token);
// // // // // // //     setToken(response.data.token)
// // // // // // // }
// // // // // // // else{
// // // // // // // toast.error(response.data.message)
    
// // // // // // // }


// // // // // // //     } catch (error) {
        
// // // // // // // console.log(error);
// // // // // // // toast.error(error.message);


// // // // // // //     }
// // // // // // // }

// // // // // // //     return (
// // // // // // //         <div className='min-h-screen flex items-center justify-center w-full'>
// // // // // // //             <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
// // // // // // //                 <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
// // // // // // //                 <form onSubmit={onSubmitHandler}>


// // // // // // //                     <div className='mb-3 min-w-72'>

// // // // // // //                         <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
// // // // // // //                         <input onChange={(e)=>setEmail(e.target.value)}  value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@email.com' required />
// // // // // // //                     </div>

// // // // // // //                     <div className='mb-3 min-w-72'>

// // // // // // //                         <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
// // // // // // //                         <input onChange={(e)=>setPassword(e.target.value)}  value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter Your Password' required />
// // // // // // //                     </div>
// // // // // // //                     <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type="submit">Login</button>


// // // // // // //                 </form>
// // // // // // //             </div>
// // // // // // //         </div>
// // // // // // //     )
// // // // // // // }

// // // // // // // export default Login


// // // // // // import axios from 'axios';
// // // // // // import React, { useState } from 'react'
// // // // // // import { backendUrl } from '../App';
// // // // // // import { toast } from 'react-toastify';

// // // // // // const Login = ({ setToken }) => {

// // // // // //   const [email, setEmail] = useState('');
// // // // // //   const [password, setPassword] = useState('');

// // // // // //   const onSubmitHandler = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
// // // // // //       console.log('Login response:', response.data);  // Debug: check response data

// // // // // //       if (response.data.success && response.data.token) {
// // // // // //         setToken(response.data.token);
// // // // // //         toast.success('Login successful!');
// // // // // //       } else {
// // // // // //         toast.error(response.data.message || 'Login failed');
// // // // // //       }

// // // // // //     } catch (error) {
// // // // // //       console.error('Login error:', error);
// // // // // //       toast.error(error.message || 'Something went wrong');
// // // // // //     }
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className='min-h-screen flex items-center justify-center w-full'>
// // // // // //       <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
// // // // // //         <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
// // // // // //         <form onSubmit={onSubmitHandler}>
// // // // // //           <div className='mb-3 min-w-72'>
// // // // // //             <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
// // // // // //             <input
// // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // //               value={email}
// // // // // //               className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
// // // // // //               type="email"
// // // // // //               placeholder='your@email.com'
// // // // // //               required
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div className='mb-3 min-w-72'>
// // // // // //             <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
// // // // // //             <input
// // // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // // //               value={password}
// // // // // //               className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
// // // // // //               type="password"
// // // // // //               placeholder='Enter Your Password'
// // // // // //               required
// // // // // //             />
// // // // // //           </div>
// // // // // //           <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type="submit">Login</button>
// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default Login


// // // // // import axios from 'axios';
// // // // // import React, { useState } from 'react';
// // // // // import { backendUrl } from '../App';
// // // // // import { toast } from 'react-toastify';

// // // // // const Login = ({ setToken }) => {
// // // // //   const [email, setEmail] = useState('');
// // // // //   const [password, setPassword] = useState('');

// // // // //   const onSubmitHandler = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
// // // // //       console.log('Login response:', response.data);

// // // // //       if (response.data.success && response.data.token) {
// // // // //         setToken(response.data.token);
// // // // //         toast.success('Login successful!');
// // // // //       } else {
// // // // //         toast.error(response.data.message || 'Login failed');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Login error:', error);
// // // // //       toast.error(error.message || 'Something went wrong');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className='min-h-screen flex items-center justify-center w-full'>
// // // // //       <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
// // // // //         <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
// // // // //         <form onSubmit={onSubmitHandler}>
// // // // //           <div className='mb-3 min-w-72'>
// // // // //             <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
// // // // //             <input
// // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // //               value={email}
// // // // //               className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
// // // // //               type="email"
// // // // //               placeholder='your@email.com'
// // // // //               required
// // // // //             />
// // // // //           </div>
// // // // //           <div className='mb-3 min-w-72'>
// // // // //             <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
// // // // //             <input
// // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // //               value={password}
// // // // //               className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
// // // // //               type="password"
// // // // //               placeholder='Enter Your Password'
// // // // //               required
// // // // //             />
// // // // //           </div>
// // // // //           <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type="submit">Login</button>
// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Login;


// // // // import React, { useState } from 'react';

// // // // const Login = ({ setToken }) => {
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');

// // // //   const onSubmitHandler = (e) => {
// // // //     e.preventDefault();

// // // //     // Mock successful login if email and password are non-empty
// // // //     if (email && password) {
// // // //       setToken('mock-token-123');
// // // //     } else {
// // // //       alert('Enter email and password');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <form onSubmit={onSubmitHandler}>
// // // //       <input
// // // //         type="email"
// // // //         placeholder="Email"
// // // //         value={email}
// // // //         onChange={e => setEmail(e.target.value)}
// // // //       />
// // // //       <br />
// // // //       <input
// // // //         type="password"
// // // //         placeholder="Password"
// // // //         value={password}
// // // //         onChange={e => setPassword(e.target.value)}
// // // //       />
// // // //       <br />
// // // //       <button type="submit">Login</button>
// // // //     </form>
// // // //   );
// // // // };

// // // // export default Login;


// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import { toast } from 'react-toastify';
// // // import { backendUrl } from '../App';  // Make sure this path is correct

// // // const Login = ({ setToken }) => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');

// // //   const onSubmitHandler = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await axios.post(backendUrl + '/api/user/admin', { email, password });

// // //       console.log('Login response:', response.data);

// // //       if (response.data.success && response.data.token) {
// // //         setToken(response.data.token);
// // //         toast.success('Login successful!');
// // //       } else {
// // //         toast.error(response.data.message || 'Login failed');
// // //       }
// // //     } catch (error) {
// // //       console.error('Login error:', error);
// // //       toast.error(error.message || 'Something went wrong');
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={onSubmitHandler}>
// // //       <input
// // //         type="email"
// // //         placeholder="Email"
// // //         value={email}
// // //         onChange={e => setEmail(e.target.value)}
// // //         required
// // //       />
// // //       <br />
// // //       <input
// // //         type="password"
// // //         placeholder="Password"
// // //         value={password}
// // //         onChange={e => setPassword(e.target.value)}
// // //         required
// // //       />
// // //       <br />
// // //       <button type="submit">Login</button>
// // //     </form>
// // //   );
// // // };

// // // export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl } from '../App';

// const Login = ({ setToken }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${backendUrl}/api/user/admin`, { email, password });
//       if (response.data.success && response.data.token) {
//         setToken(response.data.token);
//         toast.success('Login successful!');
//       } else {
//         toast.error(response.data.message || 'Login failed');
//       }
//     } catch (error) {
//       toast.error(error.message || 'Something went wrong');
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         required
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         required
//       />
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;




// import axios from 'axios';
// import React, { useState } from 'react';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';

// const Login = ({ setToken }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(backendUrl + '/api/user/admin', {
//         email,
//         password,
//       });

//       if (response.data.success && response.data.token) {
//         setToken(response.data.token);
//         toast.success('Login successful!');
//       } else {
//         toast.error(response.data.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       toast.error(error.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className='min-h-screen flex items-center justify-center w-full'>
//       <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
//         <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
//         <form onSubmit={onSubmitHandler}>
//           <div className='mb-3 min-w-72'>
//             <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
//               type='email'
//               placeholder='your@email.com'
//               required
//             />
//           </div>
//           <div className='mb-3 min-w-72'>
//             <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
//               type='password'
//               placeholder='Enter Your Password'
//               required
//             />
//           </div>
//           <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type='submit'>
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + '/api/user/admin', {
        email,
        password,
      });

      if (response.data.success && response.data.token) {
        localStorage.setItem('token', response.data.token); // ✅ store token
        setToken(response.data.token); // ✅ set state if used globally
        toast.success('Login successful!');
        navigate('/add'); // ✅ redirect to admin panel
      } else {
        toast.error(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Something went wrong');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
              type='email'
              placeholder='your@email.com'
              required
            />
          </div>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
              type='password'
              placeholder='Enter Your Password'
              required
            />
          </div>
          <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
