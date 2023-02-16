const Mongoose = require("mongoose");

const db = Mongoose.connection
db.once("open", () => {
  console.log("DB Connected ...!");
});

Mongoose.set('strictQuery', false)
  const MoongooseConnect = async () => {
    await Mongoose.connect(process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true 
      }
    );
  };

module.exports = {MoongooseConnect}