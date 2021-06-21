const mongoose = require("mongoose");
const { Schema } = require("mongoose");

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
});

module.exports = mongoose.model("Profile", ProfileSchema);
