import fs from "fs";
import path from "path";

const NewsletterRegistrationHandler = (req, res) => {
  const filePath = path.join(process.cwd(), "data", "emails.json");
  const data = JSON.parse(fs.readFileSync(filePath));

  if (req.method === "POST") {
    if (!req.body.email || !req.body.email.includes("@")) {
      res.status(422).json({ message: "Invalid Email Entered" });
    }
    const newEmail = {
      id: Math.random().toFixed(2) * Math.random().toFixed(2),
      email: req.body.email,
    };

    data.push(newEmail);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(200).json({ message: "Success", email: newEmail });
  }
};

export default NewsletterRegistrationHandler;
