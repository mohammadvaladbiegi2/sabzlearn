import connectToDB from "@/DB/DataBase";
import { Lesson } from "@/Models/LessonModel";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "POST":
      {
        // create New lesson
        if (process.env.PriveKey !== req.body.PriveKey) {
          return res
            .status(401)
            .json("You do not have permission to access the protected api");
        }

        try {
          let Newlesson = new Lesson(req.body);
          let saveLesson = await Newlesson.save();
          if (saveLesson) {
            res.status(201).json("lesson Creacte successfully");
          } else {
            return res.status(424).json("lesson Not Creact Try agin");
          }
        } catch (error) {
          console.error("Error creating course:", error);
          res.status(500).json({ message: "Internal server error" });
        }
      }
      break;

    default: {
      return res.status(404).json("Bad Method ");
    }
  }
}
