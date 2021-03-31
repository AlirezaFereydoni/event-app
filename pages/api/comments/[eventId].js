import fs from "fs";
import path from "path";

const CommentHandler = (req, res) => {
  const filePath = path.join(process.cwd(), "data", "comments.json");
  const data = JSON.parse(fs.readFileSync(filePath));
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, comment } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid data" });
    }
    const newComment = {
      id: Math.random().toFixed(2),
      email: email,
      comment: comment,
      name: name,
      eventId: eventId,
    };
    data.push(newComment);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "success", comment: newComment });
  }

  if (req.method === "GET") {
    res.status(200).json({ comments: data });
  }
};

export default CommentHandler;
