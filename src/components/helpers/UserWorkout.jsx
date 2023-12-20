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
import CrudWorkout from './UserWorkout/CrudWorkout'


export default function UserWorkout({sessionData}) {
    const {user} = sessionData
    const { workoutId, setWorkoutId } = useBuilderContext()
    const [workout, setWorkout] = useState([])
    const [isWorkoutData, setIsWorkoutData] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    function updateState(currentState, method) {
      console.log("in updatooor",currentState)
      if(method === "delete"){
        console.log(currentState, method)
        setWorkout([])
      }else if(method === "create"){
        console.log(currentState, method)
        setWorkout(currentState)
        setWorkoutId(currentState._id)
      }
      else{
        setWorkout((current) => {
        return( 
        {
          ...current,
          exercise_data: currentState
        })
      })
      const isData = dataChecker(workout)
      setIsWorkoutData(isData)
      }
      
    }

    const dataChecker = (workout) =>{ 
      let valid = false
      if(workout){
        console.log("in the data checker:", workout.exercise_data)
        workout.exercise_data && workout.exercise_data.length > 0 ?
        valid = true : valid = false
      }
      return valid
      
    }
    useEffect(() => {
      setIsLoaded(true)
      const isData = dataChecker(workout)
      console.log(isData)
      setIsWorkoutData(isData)
    }, [workout])

    useEffect(() => {
  
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
                  console.log(data)
                  setWorkoutId(data.data._id)
                  setWorkout(data.data)
                } 
                // else {
                //   console.error("Error:", response.status, response.statusText);
                // }

            }catch (error){
                console.error("Error")
            }
       
      } 
      fetchEditWorkout()
    }, [])


  return (
    <>
    <Card className="m-4">
        <CardContent>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className='p-2 m-2'>
            <TypographyH1 text={user.name}/>
            <TypographyP text={"This section will track your workout as you build it!"}/>
          </div>
          <CrudWorkout isWorkoutData={isWorkoutData} workoutId={workoutId} workout={workout} updateState={updateState} user={user}/>
        </CardHeader>
          <WorkoutDisplay workout={workout} workoutId={workoutId} updateState={updateState}/>
          <WorkoutAreasDisplay workoutData={workout.exercise_data} workoutId={workoutId} updateState={updateState}/>
        </CardContent>
    </Card>
    </>
    
  )
}
