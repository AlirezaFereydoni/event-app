import { MongoClient } from "mongodb";

const CommentHandler = async (req, res) => {
  const eventId = req.query.eventId;
  const url =
    "mongodb+srv://Alireza:9092654a@nextjseventcluster.zzufe.mongodb.net/comments?retryWrites=true&w=majority";
  const client = MongoClient.connect(url);
  const database = client.db();
  const collection = database.collection("comments");

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

    const result = await collection.insertOne(newComment);
    res.status(201).json({ message: "success", comment: newComment });
  }

  if (req.method === "GET") {
    const comments = collection.find().toArray();
    res.status(200).json({ comments: comments });
  }

  client.close();
};

export default CommentHandler;
