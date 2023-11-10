
// Create a global client variable
import {clientPromise} from "../../lib/mongodb";
import mongoose from "mongoose";
// Create a global UserModel variable
import { UserModel } from "../../lib/mongodb";

export default async function handler(req, res) {
  // Reuse the client and UserModel variables
  const client = await clientPromise;
  const db = client.db("GYM-GUARDIAN");
  const User = UserModel;
  console.log("here above")
  // Switch on the HTTP method
  switch (req.method) {
    case "POST":
      console.log("here")
      // Create a new user
      const userFields = {
        username: req.body.username,
        password: req.body.password,
        _id: new mongoose.Types.ObjectId(),
      };

      
      const user = new User(userFields);
      let data = await db.collection("User").insertOne(user);
      
      console.log(user)
      console.log(data)
      const allUsers = await db.collection("User").find({}).toArray();
      // Save the user to the database
      // await user.save();

      // Respond with the created user
      res.json(user);
      break;

    case "GET":
      // Find all users in the database
      const users = await User.find({})

      // Respond with the users
      res.json({ status: 200, data: users });
      break;
  }
}