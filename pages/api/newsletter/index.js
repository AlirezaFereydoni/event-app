import { MongoClient } from "mongodb";

const NewsletterRegistrationHandler = async (req, res) => {
  if (req.method === "POST") {
    if (!req.body.email || !req.body.email.includes("@")) {
      res.status(422).json({ message: "Invalid Email Entered" });
    }
    const newEmail = {
      email: req.body.email,
    };

    const url =
      "mongodb+srv://Alireza:9092654a@nextjseventcluster.zzufe.mongodb.net/newsletter?retryWrites=true&w=majority";

    const client = await MongoClient.connect(url);
    const database = client.db();
    const collection = database.collection("emails");
    const result = await collection.insertOne(newEmail);
    newEmail.id = result.insertedId;

    res.status(200).json({ message: "Success", email: newEmail });
    client.close();
  }
};

export default NewsletterRegistrationHandler;
