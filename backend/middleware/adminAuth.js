import jwt from 'jsonwebtoken';
const adminAuth=async(req,res,next)=>{

    try {
        const {token} =req.headers
        if (!token) {
            return res.json({success:false,message:"Not Authorized Login Again"})
        }

        const token_decode=jwt.verify(token,process.env.JWT_SECRET);
        if (token_decode!==process.env.ADMIN_EMAIL+ process.env.ADMIN_PASSWORD) {
            return res.json({success:false,message:"Not Authorized Login Again"})
            
        }


        next()
    } catch (error) {
        
console.log(error);
res.json({success:false,message: error.message})

    }
}


export default adminAuth;


// import jwt from 'jsonwebtoken';

// const adminAuth = async (req, res, next) => {
//     try {
//         //const { token } = req.headers;
// const token = req.headers.authorization?.split(' ')[1];

//         if (!token) {
//             return res.json({ success: false, message: "Not Authorized Login Again" });
//         }

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         if (decoded.email !== process.env.ADMIN_EMAIL) {
//             return res.json({ success: false, message: "Not Authorized Login Again" });
//         }

//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export default adminAuth;



// import jwt from 'jsonwebtoken';

// const adminAuth = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ success: false, message: 'Token missing or invalid' });
//     }

//     const token = authHeader.split(' ')[1];

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (decoded.email !== process.env.ADMIN_EMAIL) {
//       return res.status(403).json({ success: false, message: 'Not Authorized Login Again' });
//     }

//     req.admin = decoded;
//     next();
//   } catch (error) {
//     console.error('Admin Auth Error:', error.message);
//     res.status(403).json({ success: false, message: 'Token invalid or expired' });
//   }
// };

// export default adminAuth;


// middleware/adminAuth.js
// import jwt from 'jsonwebtoken';

// const adminAuth = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ success: false, message: 'Token missing or invalid' });
//     }
//     const token = authHeader.split(' ')[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (decoded.email !== process.env.ADMIN_EMAIL) {
//       return res.status(403).json({ success: false, message: 'Not Authorized Login Again' });
//     }
//     req.admin = decoded;
//     next();
//   } catch (error) {
//     console.error('Admin Auth Error:', error.message);
//     res.status(403).json({ success: false, message: 'Token invalid or expired' });
//   }
// };

// export default adminAuth;
