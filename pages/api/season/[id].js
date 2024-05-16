import connectToDB from "@/DB/DataBase";
import { SeasonModel } from "@/Models/SeasonModel";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "GET": {
      try {
        let MainSeason = await SeasonModel.findOne({
          _id: req.query.id,
        })
          .populate("sections")
          .lean();
        if (MainSeason) {
          return res.json(MainSeason);
        } else {
          return res.status(400).json("Season Not fount || id Not creact");
        }
      } catch (error) {
        console.error("Error  Season:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }

    default: {
      return res.status(404).json("Bad Method");
    }
  }
}
