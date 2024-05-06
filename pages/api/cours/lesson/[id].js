import connectToDB from "@/DB/DataBase";
import { Lesson } from "@/Models/LessonModel";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(404).json("Bad Method || Use GET Method");
  } // get single lesson
  try {
    connectToDB();
    let { id } = req.query;
    let Mainlesson = await Lesson.findOne({ _id: id });
    if (Mainlesson) {
      return res.status(200).json(Mainlesson);
    } else {
      return res.status(404).json("lesson not Exist OR ID not creact");
    }
  } catch (error) {
    console.error("Error Get Lesson:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
