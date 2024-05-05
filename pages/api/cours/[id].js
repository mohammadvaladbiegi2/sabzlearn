import connectToDB from "@/DB/DataBase";
import { CourseModel } from "@/Models/CoursesModel";

export default async function Handler(req, res) {
  connectToDB();
  let { id } = req.query;

  switch (req.method) {
    case "GET": {
      // get single cours
      try {
        if (id.length !== 24) {
          return res.status(411).json("id must be a 24 character");
        }
        let maincours = await CourseModel.findOne({ _id: id });
        if (maincours) {
          return res.status(200).json(maincours);
        } else {
          return res.status(404).json("course not Exist OR ID not creact");
        }
      } catch (error) {
        console.error("Error Get course:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
    case "POST": {
      // add New commment for course

      try {
        let maincours = await CourseModel.findOne({ _id: id });
        if (!maincours) {
          return res.status(404).json("course not Exist OR ID not creact");
        }
        console.log();
        maincours.comment = [...maincours.comment, req.body];
        await maincours.save();
        return res.status(201).json("comment add");
      } catch (error) {
        console.error("Error creating course:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }

    default:
      break;
  }
}
