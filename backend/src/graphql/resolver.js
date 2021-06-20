const Profile = require("../models/Profile");

module.exports = {
  Hello() {
    return "Hello World";
  },

  createProfile: async function ({ profileInput }, req) {
    const profile = await Profile.create({
      namaDepan: profileInput.namaDepan,
      namaBelakang: profileInput.namaBelakang,
      alamat: profileInput.alamat,
    });

    return { ...profile._doc, _id: profile._id.toString() };
  },
};
