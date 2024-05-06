import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";

export default async function handler(req, res) {
  // add new ticket
  if (req.method !== "PUT") {
    return res.status(404).json("Bad Method || Use PUT method");
  }
  connectToDB();
  let { id } = req.query;
  try {
    let userTarget = await User.findOne({ _id: id });

    if (!userTarget) {
      return res.status(404).json("user not Exist OR ID not creact");
    }
    console.log(userTarget);
    userTarget.tickets = [...userTarget.tickets, req.body];
    let savecours = await userTarget.save();
    if (savecours) {
      return res.status(201).json("ticket add");
    } else {
      return res.status(424).json("ticket Not add Try agin");
    }
  } catch (error) {
    console.error("Error Add  ticket:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
