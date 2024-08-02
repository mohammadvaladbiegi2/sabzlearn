import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";
import { validatePhoneNumber } from "@/Utils/Validations";
import { compare } from "bcryptjs";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
export default async function Signinapi(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(404).json("Bad Method || Use POST method");
  }

  try {
    connectToDB();
    let { phoneNumber, password } = req.body;
    if (!validatePhoneNumber(phoneNumber)) {
      return res.status(412).json("prompt Not Valid");
    }
    let FindUser = await User.findOne({ phoneNumber });

    if (!FindUser) {
      return res.status(404).json("phoneNumber Not creact || Not Signup");
    }
    let UserToken = sign(
      { phoneNumber: FindUser.phoneNumber },
      process.env.PriveKey,
      {
        // create Token
        expiresIn: "24h",
      }
    );
    let IsValidePassword = await compare(password, FindUser.password);
    if (IsValidePassword) {
      return res
        .setHeader(
          // set token in cookie user
          "Set-Cookie",
          serialize("token", UserToken, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24,
          })
        )
        .status(200)
        .json("welcom");
    } else {
      return res.status(422).json("PhoneNumber Or Password Not Correct");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Problem at Server Try Anothe time");
  }
}
