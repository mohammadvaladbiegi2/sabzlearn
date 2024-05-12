import connectToDB from "@/DB/DataBase";
import { SectionModel } from "@/Models/SectionModel";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "POST": {
      //Creating episodes for a specific season
      if (process.env.PriveKey !== req.body.PriveKey) {
        return res
          .status(401)
          .json("You do not have permission to access the protected api");
      }

      try {
        const newSections = new SectionModel(req.body);

        const savedSections = await newSections.save();

        if (savedSections) {
          return res.status(201).json("Creact New Sections Successfully");
        } else {
          return res.status(424).json("Sections Not Creact Try agin");
        }
      } catch (error) {
        console.error("Error Create Sections:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
    case "GET": {
      if (process.env.PriveKey !== req.body.PriveKey) {
        return res
          .status(401)
          .json("You do not have permission to access the protected api");
      }
      let AllSections = await SectionModel.find();
      return res.json(AllSections);
    }

    default: {
      return res.status(404).json("Bad Method");
    }
  }
}
