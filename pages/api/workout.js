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
          console.log("by id", id)
          console.log(db.collection('Workouts'))
          // If a muscle_group parameter is provided, filter exercises by muscle_group
          const exercises = await db.collection("Workouts").findOne({ _id: String(id) });
          console.log(exercises)
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
    const existingWorkout = await db.collection('Workouts').findOne({ _id: req.body._id });

    if(!req.body.user){
      res.status(400).json({error: "User must be logged in to create a new workout"})
    }

    if (existingWorkout) {
      res.status(409).json({ status: 409, error: 'Workout with the same ID already exists' });
    } else {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth(); // Note: Months are 0-indexed, so this returns the current month
      const day = today.getDate();

      const customDate = new Date(year, month, day);
      // Process the status update
      const id = new ObjectId();
      const workoutData = {
        _id: String(id),
        status:  req.body.status || "Edit",
        date: req.body.date || customDate,
        length: {
          value: req.body.length || '',
          label: 'Length',
          description: "How long did the workout take in minutes?"
        },
        cals_burned: {
          value: req.body.cals_burned || '',
          label: 'Calories Burned',
          description: "Input the data gathered from a fitness watch or other device on how many calories were burned."
        },
        moodBefore: {
          value: req.body.moodBefore || '',
          label: 'Mood Before',
          description: "Describe what your mood was like before this workout on a scale from 1 - 10 (10 being best)."
        },
        moodDuring: {
          value: req.body.moodDuring || '',
          label: 'Mood During',
          description: "Describe what your mood was like during this workout on a scale from 1 - 10 (10 being best)."
        },
        moodAfter: {
          value: req.body.moodAfter || '',
          label: 'Mood After',
          description: "Describe what your mood was like after this workout on a scale from 1 - 10 (10 being best)."
        },
        intensity: {
          value: req.body.intensity || '',
          label: 'Intensity',
          description: "On a scale from 1-10, how intense was this workout?"
        },
        exhaustion: {
          value: req.body.exhaustion || '',
          label: 'Exhaustion',
          description: "On a scale from 1-10, how exhausted were you after this workout?"
        },
        sleep: {
          value: req.body.sleep || '',
          label: 'Sleep',
          description: "How many hours of sleep did you get the night before this workout?"
        },
        user: req.body.user,
        exercise_data: [],
      };

      await db.collection('Workouts').insertOne(workoutData);
      res.json({ status: 200, data: workoutData, message: 'Workout successfully created!' });
    }
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
       
    }
  }