import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";
import { validatePhoneNumber, validatusername } from "@/Utils/Validations";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(404).json("Bad Method");
  }
  connectToDB();
  try {
    let { username, phoneNumber } = req.body;
    if (!validatePhoneNumber(phoneNumber) || !validatusername(username)) {
      return res.status(412).json("prompt Not Valid");
    }

    let updateinfo = await User.findByIdAndUpdate(
      { _id: req.query.id },
      { username, phoneNumber }
    );
    if (updateinfo) {
      return res.status(201).json("Update successfully");
    } else {
      return res.status(417).json("User Not Updates");
    }
  } catch (error) {
    console.error("Error Update User:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
