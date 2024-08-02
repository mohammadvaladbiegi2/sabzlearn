const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose.connect("mongodb+srv://mohammadvaladbiegi2:UOT7FmrXEfAO3sT3@cluster0.h05ilvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
      console.log("Conntect To DB Successfully :))");
    }
  } catch (err) {
    console.log("DB Connecction Error =>", err);
  }
};



export default connectToDB;
