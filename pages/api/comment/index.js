import connectToDB from "@/DB/DataBase";
import { CommentModel } from "@/Models/CommentModel";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "POST": {
      // create comment
      try {
        let newComment = new CommentModel(req.body);
        let saveComment = await newComment.save();
        if (saveComment) {
          return res.status(200).json("create successfully");
        } else {
          return res.status(401).json("comment Not Create Try again");
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
      }
    }

    default:
  }
}
