const Profile = require("../models/Profile");

module.exports = {
  auth: async function ({ email, password }, req) {
    const profile = await Profile.findOne({ email: email }).select("+password");

    if (!profile) {
      return new Error("Invalid email or password");
    }

    const match = await profile.matchPassword(password);

    if (!match) {
      return new Error("Invalid password");
    }

    return { ...profile._doc, msg: "Login succes" };
  },

  getAllProfiles: async function (args, req) {
    const count = await Profile.find().countDocuments();
    const profiles = await Profile.find();

    return {
      data: profiles,
      total: count,
    };
  },

  getProfileById: async function ({ id }, req) {
    const profile = await Profile.findById(id);
    return profile;
  },

  createProfile: async function ({ profileInput }, req) {
    const existing = await Profile.findOne({
      email: profileInput.email,
    });

    if (existing) {
      return new Error("Email already registered");
    }

    const profile = await Profile.create({
      namaDepan: profileInput.namaDepan,
      namaBelakang: profileInput.namaBelakang,
      alamat: profileInput.alamat,
      gender: profileInput.gender,
      avatar: profileInput.avatar,
      email: profileInput.email,
      password: profileInput.password,
    });

    return { ...profile._doc, msg: "Success register user" };
  },

  updateProfile: async function ({ profileInput }, req) {
    console.log(profileInput);
  },

  deleteProfile: async function ({ id }, req) {
    const profile = await Profile.findById(id);

    if (!profile) {
      return new Error("Profile not found");
    }

    await profile.remove();

    return `Profile Deleted`;
  },
};
