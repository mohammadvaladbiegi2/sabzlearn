export default function Handler(req, res) {
  req.method === "GET"
    ? res.json("first api")
    : res.status(400).json("bad requst");
}
