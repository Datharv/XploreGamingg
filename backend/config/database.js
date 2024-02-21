const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://nextjs13:next@cluster0.2e6vfnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Ecommerces", {
      dbName: "Ecommerce",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server : ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
