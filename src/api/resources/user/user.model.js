//const bcryptjs  = require("bcryptjs");
const mongoose = require("mongoose");

const { Schema } = mongoose;
const UserSchema = new Schema({
  local: {
    name: String,
    email: String,
    password: String,
  },
  google: {
    email: String,
    id: String,
    displayName: String,
    token: String,
  },
  twitter: {
    username: String,
    id: String,
    token: String,
    displayName: String,
    email: String,
  },
  github: {
    email: String,
    id: String,
    displayName: String,
    token: String,
  },
});

// UserSchema.pre('save', async function() {
//   // if user is modified or user is new
//   if (this.isModified('password') || this.isNew) {
//     const salt = await bcryptjs.genSalt();
//     const hash = await bcryptjs.hash(this.password, salt);
//     this.password = hash;
//   }
// });

module.exports =  mongoose.model('User', UserSchema);