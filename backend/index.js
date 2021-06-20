const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

//init
const app = express();
const connectDB = require("./src/config/db");

//graphql
const { graphqlHTTP } = require("express-graphql");
const schema = require("./src/graphql/schema");
const root = require("./src/graphql/resolver");
//load env vars
dotenv.config({
  path: "./src/config/config.env",
});

//connect to DB
connectDB();

app.use(morgan("dev"));
//graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8082, () => {
  console.log("App listening on port 8082!");
});
