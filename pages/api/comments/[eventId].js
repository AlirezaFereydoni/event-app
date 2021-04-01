import { MongoClient } from "mongodb";

const CommentHandler = async (req, res) => {
  const eventId = req.query.eventId;
  const url =
    "mongodb+srv://Alireza:9092654a@nextjseventcluster.zzufe.mongodb.net/newsletter?retryWrites=true&w=majority";
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
    try {
      await collection.insertOne(newComment);
      res.status(201).json({ message: "success", comment: newComment });
    } catch (err) {
      res.status(500).json({ message: "Inserting Comment Failed!" });
    }
  }

  if (req.method === "GET") {
    try {
      const comments = collection.find().toArray();
      res.status(200).json({ comments: comments });
    } catch (err) {
      res.status(500).json({ message: "Couldn't get comments" });
    }
  }

  client.close();
};

export default CommentHandler;
