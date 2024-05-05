import connectToDB from "@/DB/DataBase";
import { CourseModel } from "@/Models/CoursesModel";

export default async function Handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "GET": {
      // get All course
      try {
        let Allcourses = await CourseModel.find();
        if (Allcourses) {
          return res.status(200).json(Allcourses);
        } else {
          return res.status(404).json("Still dont cours Exist");
        }
      } catch (error) {
        return res.status(500).json("Server Problem Try Another Time");
      }
    }
    case "POST": {
      if (process.env.PriveKey !== req.body.PriveKey) {
        return res
          .status(401)
          .json("You do not have permission to access the protected api");
      }
      // create new course
      try {
        const newCourse = new CourseModel(req.body);

        const savedCourse = await newCourse.save();

        if (savedCourse) {
          res.status(201).json("Course Creacte successfully");
        } else {
          return res.status(424).json("Course Not Creact Try agin");
        }
      } catch (error) {
        console.error("Error creating course:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }

    default: {
      return res.status(404).json("Bad Method");
    }
  }
}
