import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";
import { compare, hash } from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(401).json("Bad Method");
  }
  connectToDB();
  try {
    let Mainuser = await User.findOne({ _id: req.query.id });
    let IsValidePassword = await compare(
      req.body.beforpassword,
      Mainuser.password
    );
    if (!IsValidePassword) {
      return res.status(422).json("password Not correct");
    }
    let HashPassword = await hash(req.body.newpassword, 12);
    let newuserpassword = await User.findByIdAndUpdate(
      { _id: req.query.id },
      { password: HashPassword }
    );
    if (newuserpassword) {
      return res.status(201).json("Password Update successfully");
    } else {
      return res.status(417).json("Password Not Updated");
    }
  } catch (error) {
    console.error("Error Update User Password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
