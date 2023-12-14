import {clientPromise} from "../../db/mongodb";
import _ from "lodash"
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("GYM-GUARDIAN");

    switch(req.method){
        case "PUT":
            const data = req.body.data
            const key = req.body.key
            const label = req.body.label
       
            const existingWorkout = await db.collection('Workouts').findOne({ _id: req.body._id });
            if (!existingWorkout) {
                return res.status(404).json({ status: 404, message: 'Workout not found!' });
              }

            const updateQuery = { $set: { [key]: data } };

            // Update the document in the collection
            await db.collection('Workouts').updateOne({ _id: req.body._id }, updateQuery);

            res.json({ status: 200, message: `${label} has been successfully updated!` });
        
        break;

    }

   

    

}