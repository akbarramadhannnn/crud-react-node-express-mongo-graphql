const Profile = require("../models/Profile");

module.exports = {
  hello() {
    return "Hello World";
  },

  createProfile: async function ({ profileInput }, req) {
    const profile = await Profile.create({
      namaDepan: profileInput.namaDepan,
      namaBelakang: profileInput.namaBelakang,
      alamat: profileInput.alamat,
      gender: profileInput.gender,
      avatar: profileInput.avatar,
    });

    return { ...profile._doc, _id: profile._id.toString() };
  },

  getAllProfiles: async function (args, req) {
    const count = await Profile.find().countDocuments();
    const profiles = await Profile.find();

    return {
      data: profiles.map((p) => {
        console.log({ ...p._doc });
        return {
          ...p._doc,
        };
      }),
      total: count,
    };
  },

  getProfileById : async function (args,req) {
      console.log('args',args)
  }
};
