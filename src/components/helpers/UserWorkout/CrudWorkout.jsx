import React from 'react'
import { Button } from '@/components/ui/button'
import { TypographyH1, TypographyMuted, TypographyP, TypographyH3 } from '@/components/typography/Typography'

export default function CrudWorkout({isWorkoutData, workoutId, workout, updateState}) {
    

    const deleteWorkout = async () => {
        console.log(updateState, workoutId)
        const confirm = window.confirm("Are you sure you want to delete this workout? By doing so, all data will be lost.");
      
        if (!confirm) {
          return;
        } else {
          try {
            const response = await fetch(`http://localhost:3000/api/workout?id=${workoutId}`, {
              method: "DELETE",
              headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
              },
            });
      
            if (response.ok) {
              const data = await response.json();
              if (data.status === 200) {
                alert("Successfully deleted Workout");
                console.log(data);
                updateState([], "delete");
              } else {
                alert(data.message);
              }
            } else {
              console.error("Error:", response.status, response.statusText);
            }
          } catch (error) {
            console.error("Error:", error);
            // Handle the error, log, or display an error message as needed
          }
        }
      };
      

    const finalizeWorkout = () => {
        console.log(isWorkoutData)
        console.log(workout)
    }
  return (
    <>
     {
        isWorkoutData ? 
        <div>
         <Button onClick={deleteWorkout}>Delete Workout</Button>
         <Button onClick={finalizeWorkout} className="ml-2">Finalize Workout</Button>
        </div>
         : 
        <div className='flex flex-col justify-between'>
         <Button onClick={deleteWorkout} className="mb-2">Delete Workout</Button>
         <TypographyMuted text="(You need atleast on exercise before you can finish a workout!)"/>
        </div>
       
     }
    </>
   
  )
}
