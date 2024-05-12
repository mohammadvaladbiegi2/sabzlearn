import connectToDB from "@/DB/DataBase";
import { SectionModel } from "@/Models/SectionModel";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "GET": {
      try {
        let MainSections = await SectionModel.findOne({ _id: req.query.id });
        if (MainSections) {
          return res.json(MainSections);
        } else {
          return res.status(400).json("sections Not fount || id Not creact");
        }
      } catch (error) {
        console.error("Error  Sections:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }

    default: {
      return res.status(404).json("Bad Method");
    }
  }
}
