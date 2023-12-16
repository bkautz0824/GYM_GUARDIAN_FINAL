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
            
            let matchingIndex = currentData.findIndex((item) => item.name === data.name);
            if(matchingIndex > -1){
                currentData[matchingIndex] = data
            }
          
            db.collection('Workouts').updateOne({ _id: req.body._id }, { $set: { exercise_data: currentData } });
            res.json({ status: 200, data: currentData, message: 'Exercise Information successfully updated!' });
        
        break;

        case "DELETE":
            const index = req.body.index
            const parentIndex = req.body.parentIndex
            const workout = await db.collection('Workouts').findOne({ _id: req.body._id });
            if (!workout) {
                return res.status(404).json({ status: 404, message: 'Workout not found!' });
              }
            
            const exerciseData = workout.exercise_data

            exerciseData[parentIndex].data = exerciseData[parentIndex].data.filter((item, i) => i !== index);

            if (exerciseData[parentIndex].data.length === 0) {
                exerciseData.splice(parentIndex, 1);
            }
            // Update the workout object with the modified exerciseData
            workout.exercise_data = exerciseData;
            console.log(exerciseData)
            // Now update the document in the database
            await db.collection('Workouts').updateOne(
                { _id: req.body._id },
                { $set: { exercise_data: exerciseData } }
            );
        
            // Respond with success message or other relevant data
            res.json({ status: 200, message: 'Entry deleted successfully.'});

        break
    }

   

    

}