import {useMemo, useState, useEffect} from 'react'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
  import { TypographyH1, TypographyMuted, TypographyP, TypographyH3 } from '@/components/typography/Typography'
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import WorkoutAreaHelper from './WorkoutAreas/WorkoutAreaHelper'

export default function WorkoutAreasDisplay({workoutData, workoutId, updateState}) {
  let [workoutState, setWorkoutState] = useState([])
  let [editState, setEditState] = useState([])

 useEffect(() => {
    // Initialize edit states array with `false` for each item in workoutData
    workoutData ? setWorkoutState(workoutData) : null
    workoutData ? 
    setEditState(Array(workoutData.length).fill(false)) : null
  }, [workoutData]);
console.log(workoutState)
  

  const setEditMode = (index, value) => {
    
    const newEditStates = [...editState];
    
    if(value === true){
      alert("You may now edit.")
      newEditStates[index] = value;
    }else if(value === "cancel"){
      alert("Your changes have been reverted")
      setWorkoutState(workoutData)
    }
    else{
      newEditStates[index] = value;
      console.log(workoutState, value)
      updateState(workoutState)
      handleSaveChanges(index)
    }
    
    setEditState(newEditStates);
  };

  const handleInputChange = (parentIndex, newData) => {
    console.log(newData)
    setWorkoutState((prev) => {
      return prev.map((item, index) => {
        if (index === parentIndex) {
          // If it's the target parentIndex, replace the 'data' key with the new data
          return { ...item, data: newData };
        }
        return item;
      });
    });

  };

  function handleRowDelete (parentIndex, index) {
    const updatedWorkoutState = [...workoutState];
    
    updatedWorkoutState[parentIndex].data = updatedWorkoutState[parentIndex].data.filter((item, i) => i !== index);
    if(updatedWorkoutState[parentIndex].data.length === 0){
      updatedWorkoutState.splice(parentIndex, 1);
      setEditState([])
    }
      updateState(updatedWorkoutState)
      setWorkoutState(updatedWorkoutState);
    
    
    
  }

  const handleSaveChanges = async (index) => {
    const confirmed = window.confirm("Are you sure you want to save these changes and overwrite previous data?");
    
    if (!confirmed) {
      setWorkoutState(workoutData)
      return;
    }

    try {

      const response = await fetch(`http://localhost:3000/api/entryUpdate`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify({
          _id: workoutId,  // Replace with the actual value you want to send
          updateData: workoutState[index],
        }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        alert(responseData.message);
        setWorkoutState(responseData.data);
     
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  

  return (
    <div>
      {
      workoutState.length > 0 ? workoutState.map((item, i) => {
        
        return (
          <Card key={item.name + i} className="p-4 m-2" >
              <div className='flex justify-between'>
              <div className='flex items-center'>
                <h3 className='mr-5 text-2xl'>
                  {item.area}
                </h3>
                <p>{item.name + " x " + item.data.length}</p>
              </div>
              <div>
                <Button 
                  className="shadow-sm bg-primary shadow-inherit" 
                  variant="ghost" 
                  onClick={() => setEditMode(i, !editState[i])}>
                  {editState[i] ? 'Save' : 'Edit'}
                </Button>
                {
                  editState[i] ? 
                  <Button 
                    className="ml-2 shadow-sm bg-secondary shadow-inherit" 
                    variant="ghost" 
                    onClick={() => setEditMode(i, "cancel")}>
                    Cancel
                  </Button> : null
                }
              </div>
              </div> 
            <Table>
              <TableRow >
                <TableCell className="w-[150px] text-slate-500">Muscle Profile</TableCell>
                <TableCell className="w-[150px] text-slate-500">Reps</TableCell>
                <TableCell className="w-[150px] text-slate-500">Weight</TableCell>
                <TableCell className="w-[200px] text-slate-500">Notes</TableCell>
                {editState[i] && <TableHead className="w-[90px] text-slate-500">Delete</TableHead>}
              </TableRow>
              <WorkoutAreaHelper 
                data={item.data} 
                editMode={editState[i]}
                parentIndex={i} 
                handleInputChange={handleInputChange}
                workoutId={workoutId}
                handleRowDelete={handleRowDelete}
              />
            </Table>
          </Card>
          )
        }) : 

        (
        <Card className="flex flex-col justify-start p-4">
          <TypographyP text="Click on a body area to add exercise/set entries to this workout!"/>
          <TypographyMuted text="No workout data available"/>
        </Card>
        
        )
       }

    </div>
  )
}
