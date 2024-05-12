import connectToDB from "@/DB/DataBase";
import { Ticket } from "@/Models/TicketsModel";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "POST": {
      // add course to panel user
      try {
        let newticket = new Ticket(req.body);
        let saveticket = await newticket.save();
        if (saveticket) {
          return res.status(200).json("create ticket successfully");
        } else {
          return res.status(401).json("ticket not create");
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
