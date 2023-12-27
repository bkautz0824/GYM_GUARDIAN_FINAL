import React from 'react'
import {useEffect, useState} from 'react'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
  import { TypographyH1, TypographyMuted, TypographyP, TypographyH3 } from '@/components/typography/Typography'
  import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"


export default function WorkoutDisplay({workout, workoutId}) {
  const [workoutState, setWorkoutState] = useState([])

  useEffect(() => {
    let state = [];
    Object.keys(workout).forEach((key) => {
      if (typeof workout[key] === 'object') {
        console.log(workout[key], key)
        let valueInput = workout[key].value
        if (typeof valueInput === 'number' || typeof valueInput === 'string') {
          let label = workout[key].label;
          let description = workout[key].description;
  
          state.push({
            label: label,
            description: description,
            valueInput: valueInput,
            editMode: false,
            key: key
          });
        }
      }
    });

  setWorkoutState(state)
  },[workout])
  
  const handleChange = (i, newValue) => {
    const state = [...workoutState]
    const index = state.findIndex((item, idx) => idx === i);
  
    if (index !== -1) {
      state[index] = { ...state[index], valueInput: newValue };
      setWorkoutState(state);
    }
  };

  const toggleEditMode = async (i) => {
    if (workoutState[i].editMode) {
      setWorkoutState((prevWorkoutData) =>
            prevWorkoutData.map((item, index) =>
              index === i ? { ...item, editMode: !item.editMode } : item
            )
          );
      try {
        // Perform your fetch request here
        const response = await fetch('http://localhost:3000/api/metaData', {
          method: 'PUT', // or 'POST' or 'PATCH' depending on your API
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers you need
          },
          body: JSON.stringify({
            // Add the data you want to update
            _id: workoutId,
            data: {
              label: workoutState[i].label,
              description: workoutState[i].description,
              value: workoutState[i].valueInput,
            },
            key: workoutState[i].key,
            label: workoutState[i].label
            // Add other properties as needed
          }),
        });

        if (response.ok) {
          // Handle success
          const responseData = await response.json();
          alert(responseData.message);
        } else {
          // Handle errors

          alert('Failed to update data');
        }
      } catch (error) {
        console.error('Error updating data:', error);
      }
    } else {
      // If editMode is false, simply toggle the state
      setWorkoutState((prevWorkoutData) =>
        prevWorkoutData.map((item, index) =>
          index === i ? { ...item, editMode: !item.editMode } : item
        )
      );

    }
  };



  
  return (
    <Card className="p-6 max-sm:p-2">
      
     {workoutState.length > 0 ? (
        workoutState.map((item, i) => {
            return (
              <div key={item.label + i} className='m-2 '>
                
                <span className='flex items-center max-sm:flex-col max-sm:items-start max-sm:mb-1'>
                  <h3 className='mr-2'>{item.label}: </h3>
                  <TypographyMuted text={item.description}/>
                </span>
                <div className="flex justify-between w-36 ">
                <Input
                  className={item.key === 'cals_burned' ? 'w-3/5' : 'w-1/2'} // Adjust width
                  readOnly={item.editMode ? false : true}
                  value={item.valueInput}
                  onChange={(e) => handleChange(i, e.target.value)}
                  type="number"
                  step={
                    item.key === 'length'
                      ? 5
                      : item.key === 'cals_burned'
                      ? 50
                      : 1
                  }
                  min={0}
                  max={
                    item.key === 'length'
                      ? 360
                      : item.key === 'cals_burned'
                      ? 3000
                      : 10
                  }
                />
                  <Button onClick={() => toggleEditMode(i)} className="w-14">
                    {item.editMode ? 'Save' : 'Edit'}
                  </Button>
                </div>
              </div>
            );
        
        })
      ) : (
        <p>No meta data available</p>
      )}
    </Card>
  )
}
