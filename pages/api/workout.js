import {clientPromise} from "../../db/mongodb";
import _ from "lodash"
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("GYM-GUARDIAN");
    // console.log(db.collection("users"))
switch (req.method) {
     
case "GET":
        const { id } = req.query;
         // Retrieve the muscle_group query parameter
        if (id) {
          // If a muscle_group parameter is provided, filter exercises by muscle_group
          const exercises = await db.collection("Workouts").findOne({ _id: String(id) });
          res.json({ status: 200, data: exercises });
        }
        else {
          // If no muscle_group parameter is provided, retrieve all exercises
          const exercises = await db.collection("Workouts").find({}).toArray();
          res.json({ status: 200, data: exercises });
        }
        break;
  
case "POST":
    // let workoutData = req.body
    console.log("Handling POST request");
    
    if(!req.body.user || !req.body.email){
      res.status(400).json({error: "User must be logged in to create a new workout"})
    }

      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth(); // Note: Months are 0-indexed, so this returns the current month
      const day = today.getDate();

      const customDate = new Date(year, month, day);
      // Process the status update
      const workoutId = new ObjectId();
      const workoutData = {
        _id: String(workoutId),
        status:  req.body.status || "Edit",
        date: new Date(req.body.date) || customDate,
        length: {
          value: req.body.length || '0',
          label: 'Length',
          description: "How long did the workout take in minutes?"
        },
        cals_burned: {
          value: req.body.cals_burned || '0',
          label: 'Calories Burned',
          description: "Input the data gathered from a fitness watch or other device on how many calories were burned."
        },
        moodBefore: {
          value: req.body.moodBefore || '0',
          label: 'Mood Before',
          description: "Describe what your mood was like before this workout on a scale from 1 - 10 (10 being best)."
        },
        moodDuring: {
          value: req.body.moodDuring || '0',
          label: 'Mood During',
          description: "Describe what your mood was like during this workout on a scale from 1 - 10 (10 being best)."
        },
        moodAfter: {
          value: req.body.moodAfter || '0',
          label: 'Mood After',
          description: "Describe what your mood was like after this workout on a scale from 1 - 10 (10 being best)."
        },
        intensity: {
          value: req.body.intensity || '0',
          label: 'Intensity',
          description: "On a scale from 1-10, how intense was this workout?"
        },
        exhaustion: {
          value: req.body.exhaustion || '0',
          label: 'Exhaustion',
          description: "On a scale from 1-10, how exhausted were you after this workout?"
        },
        sleep: {
          value: req.body.sleep || '0',
          label: 'Sleep',
          description: "How many hours of sleep did you get the night before this workout?"
        },
        user_email: req.body.email,
        user: req.body.user,
        exercise_data: [],
      };
      console.log(workoutData)
      await db.collection('Workouts').insertOne(workoutData);
      res.json({ status: 200, data: workoutData, message: 'Workout successfully created!' });
    
    break;

case "PUT": 
    let data = req.body
    let workoutEntry = await db.collection('Workouts').findOne({ _id: data.id });

    if (!workoutEntry) {
      return res.status(404).json({ status: 404, message: 'Workout not found!' });
    }
   
    const currentData = workoutEntry.exercise_data
    data.data.map((entry, i)=> {
      let matchingIndex = currentData.findIndex((item) => item.name === entry.name);

      if (matchingIndex !== -1) {
        // If matching object found, update it
        entry.data.map((exercise, i) => {
          currentData[matchingIndex].data.push(entry.data[i]);
        })
      } else {
        currentData.push(entry);
      }
    })

    db.collection('Workouts').updateOne({ _id: data.id }, { $set: { exercise_data: workoutEntry.exercise_data } });
   
    // await db.collection("Workouts").insertOne(userFields);
    res.json({ status: 200, data: workoutEntry, message: 'Exercise Information successfully created!' });
    break;

    case "PATCH":
      console.log("here")
      let entry = await db.collection('Workouts').findOne({ _id: req.query.id });
      console.log("Updating...")
      if (!entry) {
        return res.status(404).json({ status: 404, message: 'Workout not found!' });
      }else{
        console.log("made it");
        db.collection('Workouts').updateOne({ _id: req.query.id }, { $set: { status: "Final" } });
        return res.status(200).json({ status: 200, message: 'Workout successfully finalized!' });
      }
      



  case "DELETE":
    let idToDelete = req.query.id
    if (!idToDelete) {
      return res.status(400).json({ status: 400, message: 'No ID provided for deletion' });
    }
  
    const checkWorkout = await db.collection('Workouts').findOne({ _id: String(idToDelete) });

    if(checkWorkout){
      const deleteResult = await db.collection('Workouts').deleteOne({ _id: idToDelete });
        if (deleteResult.acknowledged) {
          return res.status(200).json({ status: 200, message: 'Workout deleted successfully' });
        } else {
          return res.status(500).json({ status: 500, message: 'Failed to delete workout' });
        }

    }else{
      return res.status(404).json({ status: 404, message: 'Workout not found!' });
    }
  }
}