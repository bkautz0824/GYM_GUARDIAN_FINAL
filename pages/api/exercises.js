import {clientPromise} from "../../lib/mongodb";
import _ from "lodash"

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("GYM-GUARDIAN");
  // console.log(db.collection("users"))
  switch (req.method) {
    case "POST":
      //check if user exists
      // let user = await User.findOne({username:req.body.username})
      // if(user) return res.status(400).send("That username is already taken")
      // let user = new User(_.assign(_.pick(req.body, ['username', 'password']), { _id: new mongoose.Types.ObjectId() }))
      // console.log(user)
      console.log(req.body)
  

      let myPost = await db.collection("Exercises").insertOne(req.body);
      res.json(myPost);
      break;



    case "GET":
      const { muscle_group } = req.query; // Retrieve the muscle_group query parameter
      if (muscle_group) {
        // If a muscle_group parameter is provided, filter exercises by muscle_group
        const exercises = await db.collection("Exercises").find({ muscle_group }).toArray();
        console.log(exercises)
        res.json({ status: 200, data: exercises });
      } else {
        // If no muscle_group parameter is provided, retrieve all exercises
        const exercises = await db.collection("Exercises").find({}).toArray();
        res.json({ status: 200, data: exercises });
      }
      break;
  }
}