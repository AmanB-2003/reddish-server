require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET;
const UPLOAD_PRESET = process.env.UPLOAD_PRESET || 'ml_default';
          
cloudinary.config({ 
  cloud_name: 'dluzmeqj0', 
  api_key: '577157979181337', 
  api_secret: '4IXSkKvgCtIIj2DnPH9B7FdC5ts' 
});

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
  cloudinary,
  UPLOAD_PRESET,
};
