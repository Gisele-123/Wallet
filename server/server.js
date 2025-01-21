const express = require("express");
require("dotenv").config();
require("./config/dbConnect");
const usersRoute = require("./routes/users/usersRoute");
const accountsRoute = require("./routes/accounts/accountsRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const globalErrHandler = require("./middlewares/globalErrHandler");
const cors = require("cors");

const app = express();
const BASE_URL = process.env.BASE_URL;

app.use(express.json()); 

app.use(cors());

app.use("/api/v1/users", usersRoute);

app.use("/api/v1/accounts", accountsRoute);

app.use("/api/v1/transactions", transactionsRoute);



app.use(globalErrHandler);


const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
