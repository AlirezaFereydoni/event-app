import { MongoClient } from "mongodb";

const NewsletterRegistrationHandler = async (req, res) => {
  const url =
    "mongodb+srv://Alireza:9092654a@nextjseventcluster.zzufe.mongodb.net/newsletter?retryWrites=true&w=majority";

  const connectToDatabase = async URL => {
    return await MongoClient.connect(URL);
  };

  const insertingDocument = async (client, document) => {
    const database = client.db();
    const collection = database.collection("emails");
    const result = await collection.insertOne(document);
  };

  if (req.method === "POST") {
    if (!req.body.email || !req.body.email.includes("@")) {
      res.status(422).json({ message: "Invalid Email Entered" });
    }
    const newEmail = {
      id: Math.random().toFixed(2) + new Date().toISOString(),
      email: req.body.email,
    };
    let client;
    try {
      client = connectToDatabase(url);
    } catch (err) {
      res.status(500).json({ message: "Connecting to Database Failed!" });
      return;
    }

    try {
      insertingDocument(client, newEmail);
    } catch (err) {
      res.status(500).json({ message: "Inserting Data Failed!" });
    }

    res.status(200).json({ message: "Success", email: newEmail });
    client.close();
  }
};

export default NewsletterRegistrationHandler;
