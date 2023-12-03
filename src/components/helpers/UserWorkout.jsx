"use client"
import {useEffect, useContext} from 'react'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
  import { TypographyH1, TypographyMuted, TypographyP, TypographyH3 } from '@/components/typography/Typography'
import { useBuilderContext } from '@/context/exercise-context'


export default function UserWorkout({sessionData}) {
    const {name, email} = sessionData
    const { workoutId, setWorkoutId } = useBuilderContext()

    useEffect(() => {
        if(!workoutId){
            const fetchData = async () => {
          
                try {
                  const response = await fetch('http://localhost:3000/api/workout', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      // Add any additional headers if needed
                    },
                    body: JSON.stringify({
                      name: name,
                      // Include other data in the request body as needed
                    }),
                  });
          
                  if (!response.ok) {
                    // Handle non-OK responses
                    console.error('Failed to fetch data:', response.statusText);
                    return;
                  }
          
                  // Process the response data if needed
                  const data = await response.json();
                  const workoutId = data.data._id
                  setWorkoutId(workoutId)
                  console.log('Data received:', data);
                } catch (error) {
                  // Handle errors during the fetch
                  console.error('Error fetching data:', error);
                }
              };
          
              fetchData();
        }else{
            const fetchWorkout = async () =>{
                try{
                    const response = await fetch(`http://localhost:3000/api/workout?${workoutId}`,
                    {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        // Add any additional headers if needed
                      },}
                    )
                    console.log(response)
                }catch (error){
                    console.error("Error")
                }
            }
           
        }
    })
    console.log(workoutId)
  return (
    <>
    <Card>
        <CardContent>
        <CardHeader>
                <TypographyH1 text={name}/>
                <TypographyP text={"Use this page to start building your own workout!"}/>
            </CardHeader>
        </CardContent>
    </Card>
    </>
    
  )
}
