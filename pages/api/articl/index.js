import connectToDB from "@/DB/DataBase";
import { Article } from "@/Models/ArticlsModel";

export default async function handler(req, res) {
  connectToDB();

  if (req.method !== "POST") {
    // creact New Articl
    return res.status(404).json("Bad Method || Use POST Method");
  }

  if (process.env.PriveKey !== req.body.PriveKey) {
    return res
      .status(401)
      .json("You do not have permission to access the protected api");
  }
  try {
    const newArticls = new Article(req.body);

    const savedArticls = await newArticls.save();
    if (savedArticls) {
      return res.status(201).json("Creact New Articl Successfully");
    } else {
      return res.status(424).json("Articl Not Creact Try agin");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Problem at Server Try Anothe time");
  }
}
