const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 const userSchema = new Schema({
  email: {type: String},
  password: {type: String},
  firstName: {type: String},
  lastName: { type: String},
  role: [{
    ref: 'role',
    type: mongoose.Schema.Types.ObjectId
  }],
 });

//method to encrypt password
userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//method to compare password
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
};


 module.exports = {
   "model" : mongoose.model('users', userSchema),
   "schema" : userSchema
 };
 