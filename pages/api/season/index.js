import connectToDB from "@/DB/DataBase";
import { SeasonModel } from "@/Models/SeasonModel";

export default async function handler(req, res) {
  connectToDB();
  switch (
    req.method // create New Season for course
  ) {
    case "POST": {
      if (process.env.PriveKey !== req.body.PriveKey) {
        return res
          .status(401)
          .json("You do not have permission to access the protected api");
      }
      try {
        const newSeason = new SeasonModel(req.body);

        const savedSeason = await newSeason.save();

        if (savedSeason) {
          return res.status(201).json("Creact New Season Successfully");
        } else {
          return res.status(424).json("Season Not Creact Try agin");
        }
      } catch (error) {
        console.error("Error Create Season:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
    case "GET": {
      if (process.env.PriveKey !== req.body.PriveKey) {
        return res
          .status(401)
          .json("You do not have permission to access the protected api");
      }
      let AllSesons = await SeasonModel.find().populate("sections").lean();
      return res.json(AllSesons);
    }

    default: {
      return res.status(404).json("Bad Method");
    }
  }
}
