const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`Database connected`);
  } catch (err) {
    console.log(err);
  }

  // console.log(`Database : ${connect.connection.host} connected`);
};

module.exports = connectDB;
