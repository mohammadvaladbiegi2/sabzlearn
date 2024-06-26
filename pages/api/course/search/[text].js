import connectToDB from "@/DB/DataBase";
import { CourseModel } from "@/Models/CoursesModel";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(401).json("Bad method Use GET method");
  }

  connectToDB();
  try {
    let findcourse = await CourseModel.find({
      $or: [
        { "title.fa": { $regex: req.query.text, $options: "i" } },
        { "title.en": { $regex: req.query.text, $options: "i" } },
        { "title.ge": { $regex: req.query.text, $options: "i" } },
        { "title.ku": { $regex: req.query.text, $options: "i" } },
        { category: { $regex: req.query.text, $options: "i" } },
      ],
    });

    if (findcourse) {
      return res.status(200).json(findcourse);
    } else {
      return res.status(400).json("Nothing Find");
    }
  } catch (error) {
    console.error("Error Get Cours:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
