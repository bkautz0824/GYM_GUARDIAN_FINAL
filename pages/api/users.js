// export default function handler(req, res){
//     res.status(200).json({name: 'John Doe'})
// }

// posts.js
import User from "../../lib/mongodb/models/User";
import clientPromise from "../../lib/mongodb";
import _ from "lodash"

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("anime_store");
  // console.log(db.collection("users"))
  switch (req.method) {
    case "POST":
      //check if user exists
      let user = await User.findOne({username:req.body.username})
      if(user) return res.status(400).send("That username is already taken")
      user = await new User(_.assign(_.pick(req.body, ['username', 'password']), { _id: new mongoose.Types.ObjectId() }))

      let bodyObject = JSON.parse(req.body);
      console.log(bodyObject);
      let myPost = await db.collection("posts").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;



    case "GET":
      const users = await db.collection("users").find({}).toArray();
      console.log(users)
      res.json({ status: 200, data: users });
      break;
  }
}