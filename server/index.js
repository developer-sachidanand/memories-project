const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();

//importing the routes
dotenv.config();




const postRoutes = require("./routes/posts")
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.use('/posts',postRoutes);

app.get("/",(req,res)=>{
    res.send('The memories API started')
})
// mongodb cloud database setup
const PORT = process.env.PORT|| 5000;
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
    .then(() => app.listen(PORT,()=>console.log(`Server is running at port ${PORT}`)))
    .catch((error) => console.log(error));

