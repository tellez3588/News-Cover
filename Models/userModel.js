const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 const userSchema = new Schema({
  email: {type: String},
  password: {type: String},
  firstName: {type: String},
  lastName: { type: String}
 });
 module.exports = {
   "model" : mongoose.model('users', userSchema),
   "schema" : userSchema
 };
 