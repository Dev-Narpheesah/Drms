// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB, {
//     //   useNewUrlParser: true,
//     //   useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;



const mongoose = require('mongoose');
require("dotenv").config();
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB,{
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            
     } );
}catch(error){
    console.log(error)
}
}
module.exports = connectDb