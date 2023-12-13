import {clientPromise} from "../../db/mongodb";
import _ from "lodash"
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("GYM-GUARDIAN");

    switch(req.method){
        case "POST":
            const data = req.body.updateData
            const existingWorkout = await db.collection('Workouts').findOne({ _id: req.body._id });
            if (!existingWorkout) {
                return res.status(404).json({ status: 404, message: 'Workout not found!' });
              }
        
            const currentData = existingWorkout.exercise_data
            console.log(data)
            
            let matchingIndex = currentData.findIndex((item) => item.name === data.name);
            console.log(matchingIndex)
            currentData.map((item) => {
                console.log(item.name)
            })
            if(matchingIndex > -1){
                currentData[matchingIndex] = data
            }
          
            db.collection('Workouts').updateOne({ _id: req.body._id }, { $set: { exercise_data: currentData } });
            res.json({ status: 200, data: currentData, message: 'Exercise Information successfully updated!' });
        
        break;

        case "DELETE":

        break
    }

   

    

}