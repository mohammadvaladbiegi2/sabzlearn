import connectToDB from "@/DB/DataBase";
import { UserspanelcourseModel } from "@/Models/Userspanelcourse";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "POST": {
      // add course to panel user
      try {
        let newcourse = new UserspanelcourseModel(req.body);
        let savecourse = await newcourse.save();
        if (savecourse) {
          return res.status(200).json("course add successfully");
        } else {
          return res.status(401).json("course Not add");
        }
      } catch (error) {
        console.error("Error Add Course :", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }

    default: {
      return res.status(404).json("Bad Method");
    }
  }
}
