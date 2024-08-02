import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";
import {
  validatPassword,
  validatePhoneNumber,
  validatusername,
} from "@/Utils/Validations";
import { hash } from "bcryptjs";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
export default async function SingUpapi(req, res) {

  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  connectToDB();
  let { username, password, phoneNumber } = req.body;
  if (req.method !== "POST") {
    return res.json("Bad requst use POST Method");
  }
  try {
    if (
      !validatePhoneNumber(phoneNumber) ||
      !validatusername(username) ||
      !validatPassword(password)
    ) {
      return res.status(412).json("prompt Not Valid");
    }

    let ISRepeatUser = await User.findOne({
      $or: [{ username }, { phoneNumber }],
    });

    if (ISRepeatUser) {
      return res
        .status(422)
        .json("A user has already registered with this name and phoneNumber");
    } else {
      let HashPassword = await hash(password, 12); // Hash Password Befor Create
      let UserToken = sign({ phoneNumber }, process.env.PriveKey, {
        // create Token
        expiresIn: "24h",
      });

      const newCourse = new User({
        username,
        password: HashPassword,
        phoneNumber,
      });

      const savedCourse = await newCourse.save();

      if (savedCourse) {
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
          .status(201)
          .json({ messege: "{create succesfully", token: UserToken });
      } else {
        return res.status(424).json("User Not created");
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Problem at Server Try Anothe time");
  }
}
