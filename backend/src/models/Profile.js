const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const ProfileSchema = new Schema({
  namaDepan: {
    type: String,
  },
  namaBelakang: {
    type: String,
  },
  alamat: {
    type: String,
  },
  avatar: {
    type: String,
  },
  tanggalLahir: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["L", "P"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: [true, "Email already used"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: [6, "Password length minimum is 6 characters"],
    select: false,
  },
});

ProfileSchema.pre("save", async function (next) {
  // if not changing password
  if (!this.isModified('password')) {
  	next();
  }
  const salt = await bcrypt.genSalt(11);
  this.password = await bcrypt.hash(this.password, salt);
});

ProfileSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Profile", ProfileSchema);
