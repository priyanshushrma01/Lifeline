import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({ 
    cloud_name: "dlhckvhkd", 
    api_key: "851994478922838", 
    api_secret: "TlFVCdPpGUSVyNjKmctP45-K11c"
    // cloud_name: process.env.CLOUDINARY_NAME, 
    // api_key: process.env.CLOUDINARY_API_KEY,
    // api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
      return {
        folder: 'uploads', // Folder in Cloudinary
        format: file.mimetype.split('/')[1], // Automatically get the format (jpg, png, etc.)
        public_id: `${Date.now()}-${file.originalname.split('.')[0]}`, // Use timestamp + original name as file identifier
        resource_type: "auto"  // Automatically detect file type (useful for PDFs and images)
      };
    },
});


const upload = multer({ storage: storage });

export default upload;