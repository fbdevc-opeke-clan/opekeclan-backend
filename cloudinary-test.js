const cloudinary = require('cloudinary').v2
const path = require("path")
require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

async function upLoadThis() {
    try {
        const patho = path.resolve(__dirname, 'test1.png')
        console.log(process.env.CLOUDINARY_CLOUD_NAME)
        console.log(patho)
        const result = await cloudinary.uploader.upload(patho)
        console.log(result)
    }
    catch(err) {
        console.log(err)
    }
}

upLoadThis()