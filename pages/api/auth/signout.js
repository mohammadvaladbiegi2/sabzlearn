import { serialize } from "cookie";

export default function SignOutapi(req, res) {
  if (req.method !== "GET") {
    return res.status(422).json("know Method || Use Get Method");
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
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
