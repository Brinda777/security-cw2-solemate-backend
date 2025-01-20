const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/database');
const cors = require('cors')
const fileUpload = require('express-fileupload')
const  morgan= require('morgan');

//2. creating an express app
const app = express();
 
// josn config
app.use(express.json())

//file upload config
app.use(fileUpload())

// Make a public folder access to outside
app.use(express.static('./public'))

app.use(morgan("dev"))


//cors config
const corsOptions = {
    origin: true,
    credentials: true,
    optionSuccessStatus: 200

}
app.use(cors(corsOptions))

//configuration dotenv
dotenv.config()


//connecting to the databades
connectDB();

//3. deffining the port
const PORT = process.env.PORT;


// Configuring routes
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/product', require('./routes/productRoutes'))
app.use('/api/cart', require('./routes/cartRoutes'))
app.use('/api/order', require('./routes/orderRoutes'))

//4. starting the server
app.listen(PORT, () => {
    console.log(`Server-app is running on port ${PORT}`)
})

//exporting
module.exports = app;