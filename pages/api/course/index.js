import connectToDB from "@/DB/DataBase";
import { CourseModel } from "@/Models/CoursesModel";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "GET": {
      try {
        let Allcourse = await CourseModel.find(
          {},
          "title desc teacher price student image"
        );
        if (Allcourse) {
          return res.status(200).json(Allcourse);
        } else {
          return res.status(400).json("still course not exist");
        }
      } catch (error) {
        console.error("Error Get Articls:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
    case "POST": {
      if (process.env.PriveKey !== req.body.PriveKey) {
        return res
          .status(401)
          .json("You do not have permission to access the protected api");
      }
      try {
        const newCourse = new CourseModel(req.body);

        const savedArticls = await newCourse.save();

        if (savedArticls) {
          return res.status(201).json("Creact New Course Successfully");
        } else {
          return res.status(424).json("Course Not Creact Try agin");
        }
      } catch (error) {
        console.error("Error Get Articls:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }

    default: {
      return res.status(404).json("Bad Method");
    }
  }
}
