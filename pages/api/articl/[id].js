import connectToDB from "@/DB/DataBase";
import { Article } from "@/Models/ArticlsModel";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    // get single course
    return res.status(404).json("Bad Method || Use GET Method");
  }
  connectToDB();
  try {
    let { id } = req.query;
    let mainArticls = await Article.findOne({ _id: id });
    if (mainArticls) {
      return res.status(200).json(mainArticls);
    } else {
      return res.status(404).json("Articls not Exist OR ID not creact");
    }
  } catch (error) {
    console.error("Error Get Articls:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
