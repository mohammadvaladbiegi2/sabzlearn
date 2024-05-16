import connectToDB from "@/DB/DataBase";
import { CourseModel } from "@/Models/CoursesModel";
import { SeasonModel } from "@/Models/SeasonModel";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "GET": {
      // Get Single Course
      try {
        let MainCourse = await CourseModel.findOne(
          { _id: req.query.id },
          " -__v"
        )
          .populate("seasons comments")
          .lean();
        const seasonIds = MainCourse.seasons.map((season) => season._id);
        let Sections = await SeasonModel.find(
          { _id: { $in: seasonIds } },
          "-createdAt -updatedAt -__v"
        )
          .populate("sections")
          .lean();

        if (MainCourse) {
          return res.json({ MainCourse, Sections });
        } else {
          return res.status(400).json("Cant get course");
        }
      } catch (error) {
        console.error("Error Get Cours:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }

    default: {
      return res.status(404).json("Bad Method");
    }
  }
}
