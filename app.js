require("dotenv").config();
require("./config/config");
const express = require("express");
const emailRoute = require("./routes/emailRoute");
const app = express();

app.use(express.json());
app.use("/", emailRoute);
app.use(express.static("public"));
app.listen(process.env.PORT, () => {
  console.log(`server in running on this port ${process.env.PORT}`);
});
