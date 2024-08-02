import { serialize } from "cookie";

export default function SignOutapi(req, res) {
  if (req.method !== "GET") {
    return res.status(422).json("know Method || Use Get Method");
  }
  return res
    .setHeader(
      "Set-Cookie",
      serialize("token", "", {
        path: "/",
        maxAge: 0,
      })
    )
    .status(200)
    .json("LogOut succesfuly");
}
