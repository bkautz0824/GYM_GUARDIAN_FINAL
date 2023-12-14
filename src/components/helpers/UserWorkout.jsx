"use client"
import {useEffect, useState} from 'react'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
  import { TypographyH1, TypographyMuted, TypographyP, TypographyH3 } from '@/components/typography/Typography'
import { useBuilderContext } from '@/context/exercise-context'
import WorkoutDisplay from './UserWorkout/WorkoutDisplay'
import WorkoutAreasDisplay from './UserWorkout/WorkoutAreasDisplay'

export default function UserWorkout({sessionData}) {
    const {user} = sessionData
    const { workoutId, setWorkoutId } = useBuilderContext()
    const [workout, setWorkout] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      setIsLoaded(true)
    }, [])


    useEffect(() => {
      if(!workoutId){
        console.log("found ya")
         const fetchEditWorkout = async () =>{
            try{
                const response = await fetch(`http://localhost:3000/api/activeWorkout`,
                {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if needed
                  },}
                )
                if (response.ok) {
                  const data = await response.json();
                  setWorkoutId(data.data._id)
                  setWorkout(data.data)
                  console.log(data.data);
                } else {
                  console.error("Error:", response.status, response.statusText);
                }

            }catch (error){
                console.error("Error")
            }
        }
        fetchEditWorkout()
      }else{
        console.log("found no", workoutId)
        const fetchWorkout = async () =>{
          try{
              const response = await fetch(`http://localhost:3000/api/workout?id=${workoutId}`,
              {
              method: "GET",
              headers: {
                  'Content-Type': 'application/json',
                  // Add any additional headers if needed
                },}
              )
              if (response.ok) {
                const data = await response.json();
                setWorkout(data.data)
                
              } else {
                console.error("Error:", response.status, response.statusText);
              }
          }catch (error){
              console.error("Error")
          }
      }
      fetchWorkout()
      }
    }, [])
    console.log(workoutId, workout)
  return (
    <>
    <Card className="m-4">
        <CardContent>
        <CardHeader>
                <TypographyH1 text={user.name}/>
                <TypographyP text={"This section will track your workout as you build it!"}/>

          </CardHeader>
          <WorkoutDisplay workout={workout} workoutId={workoutId}/>
          <WorkoutAreasDisplay workoutData={workout.exercise_data} workoutId={workoutId}/>
        </CardContent>
    </Card>
    </>
    
  )
}
