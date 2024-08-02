import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";
import { verify } from "jsonwebtoken";

const verifyToken = (token) => {
  try {
    const validationResult = verify(token, process.env.PriveKey); // chek for valid token
    return validationResult;
  } catch (err) {
    console.log("Verify Token Error =>", err);
    return false;
  }
};

export default async function GetMeapi(req, res) {


  connectToDB();
  if (req.method !== "GET") {
    return res.status(404).json("Bad Method || Use GET Method");
  }
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json("Firs Loggin");
    }

    const tokenPayload = verifyToken(token); // verify and find payload

    if (!tokenPayload) {
      return res.status(401).json("Firs Loggin");
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
    let FindUser = await User.findOne(
      { phoneNumber: tokenPayload.phoneNumber },
      "-createdAt -password -updatedAt -__v"
    )
      .populate("tickets courses")
      .lean();
    return res.status(200).json(FindUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Problem at Server Try Anothe time");
  }
}
