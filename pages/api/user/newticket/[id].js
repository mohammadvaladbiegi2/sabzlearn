import connectToDB from "@/DB/DataBase";
import { SectionModel } from "@/Models/SectionModel";
import { Ticket } from "@/Models/TicketsModel";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "GET": {
      try {
        let MainTicket = await Ticket.findOne({ _id: req.query.id });
        if (MainTicket) {
          return res.json(MainTicket);
        } else {
          return res.status(400).json("ticket Not fount || id Not creact");
        }
      } catch (error) {
        console.error("Error  ticket:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }

    default: {
      return res.status(404).json("Bad Method");
    }
  }
}
