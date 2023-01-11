const mongoose = require("mongoose");
const emailSchema = new mongoose.Schema({
  email: String,
  name: String,
  phone: String,
  order: String,
});
const EmailModel = mongoose.model("UserEmail", emailSchema);

module.exports = EmailModel;
