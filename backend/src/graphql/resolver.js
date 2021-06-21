const Profile = require("../models/Profile");
const { GraphQLError } = require("graphql");

module.exports = {
  //authentication
  auth: async function ({ email, password }, req) {
    try {
      const profile = await Profile.findOne({ email: email }).select(
        "+password"
      );

      if (!profile) {
        return new Error("Invalid email or password");
      }

      const match = await profile.matchPassword(password);

      if (!match) {
        return new Error("Invalid password");
      }

      return { msg: "Login succes", ...profile._doc };
    } catch (err) {
      console.error(err);
    }
  },

  register: async function ({ profileInput }, req) {
    try {
      const existing = await Profile.findOne({
        email: profileInput.email,
      });

      if (existing) {
        return new GraphQLError("Email already registered");
      }

      const profile = await Profile.create({
        namaDepan: profileInput.namaDepan,
        namaBelakang: profileInput.namaBelakang,
        gender: profileInput.gender,
        email: profileInput.email,
        password: profileInput.password,
      });

      return { msg: "Success register user", ...profile._doc };
    } catch (err) {
      console.error(err);
      return err;
    }
  },

  // master profile
  getAllProfiles: async function (args, req) {
    try {
      const count = await Profile.find().countDocuments();
      const profiles = await Profile.find();

      return {
        data: profiles,
        total: count,
      };
    } catch (err) {
      console.log(err);
    }
  },

  getProfileById: async function ({ id }, req) {
    try {
      const profile = await Profile.findById(id);
      return profile;
    } catch (err) {
      console.error(err);
    }
  },

  createProfile: async function ({ profileInput }, req) {
    try {
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

      return { msg: "Success create user", ...profile._doc };
    } catch (err) {
      console.error(err);
    }
  },

  updateProfile: async function ({ profileInput }, req) {
    try {
      const profile = await Profile.findByIdAndUpdate(
        profileInput.id,
        {
          namaDepan: profileInput.namaDepan,
          namaBelakang: profileInput.namaBelakang,
          alamat: profileInput.alamat,
          gender: profileInput.gender,
          avatar: profileInput.avatar,
          email: profileInput.email,
          password: profileInput.password,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    } catch (err) {
      console.log(err);
    }
  },

  deleteProfile: async function ({ id }, req) {
    try {
      const profile = await Profile.findById(id);

      if (!profile) {
        return new Error("Profile not found");
      }

      await profile.remove();

      return `Profile Deleted`;
    } catch (err) {
      console.log(err);
    }
  },
};
