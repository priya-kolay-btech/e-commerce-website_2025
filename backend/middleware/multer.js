// import multer from "multer";

// const storage=multer.diskStorage({
//     filename: function(req,file,callback){
//         callback(null,file.originalname)
//     }
// })

// const upload=multer({storage})

// export default upload



import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // Save files to 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);  // Add timestamp to filename
  }
});

const upload = multer({ storage });

export default upload;



// import multer from "multer";
// import path from "path";
// import fs from "fs";

// // Ensure 'uploads/' directory exists
// const uploadPath = path.join(process.cwd(), "uploads");
// if (!fs.existsSync(uploadPath)) {
//     fs.mkdirSync(uploadPath, { recursive: true });
// }

// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, "uploads/");
//     },
//     filename: function (req, file, callback) {
//         callback(null, Date.now() + "-" + file.originalname);
//     }
// });

// const upload = multer({ storage });

// export default upload;
