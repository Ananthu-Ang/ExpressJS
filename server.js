const express = require("express");
const userRouter = require('./routes/user')
const productRouter = require('./routes/products')

const app = express();

app.use(express.json()); //act as middlware

app.use('/user',userRouter)
app.use('/product',productRouter)

app.listen(3005, () => {
  console.log("Server Running");
});
