import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useMediaQuery } from '@react-hook/media-query';
import { prodUrl } from '@/api-requests/api'

export default function WorkoutAreaHelper({data, parentIndex, editMode, handleInputChange, workoutId, handleRowDelete}) {
  const isSmallScreen = useMediaQuery('(max-width: 480px)');
  console.log(isSmallScreen)
  // let [entryState, setEntryState] = React.useState(data)
  
  const handleEntryChange = (index, key, value,) => {
    
      const updatedState = [
        ...data.slice(0, index),
        {
          ...data[index],
          [key]: value,
        },
        ...data.slice(index + 1),
      ];
  
  
      handleInputChange(parentIndex, updatedState);
  
      return updatedState;
  
  };

  const handleDelete = async (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this set?");

    if(!confirmed){
      return
    }else{
      handleRowDelete(parentIndex, index)
      try {
        const response = await fetch(`${prodUrl}/api/entryUpdate`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
          },
          body: JSON.stringify({
            _id: workoutId,  // Replace with the actual value you want to send
            index: index,
            parentIndex: parentIndex,
            method: "delete row",
          }),
        });
    
        if (response.ok) {
          const responseData = await response.json();
          alert(responseData.message);
       
        } else {
          console.error("Error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
  }



  return (
    <>

    {
      data ? data.map((item, i) => {


      return(
      <TableRow key={i} className={`h-10 bg-secondary/80`} id={`${item.profile}_${i}_cell`}>
        {
          isSmallScreen ? null :<TableCell className="font-medium">{item.profile}</TableCell>
        }
        
        <TableCell >
          <Input
            readOnly={editMode ? false : true}
            key={`reps_${i}`}
            value={item.reps}
            type="number"
            min={0}
            placeholder="0"
            onChange={(e) => handleEntryChange(i, "reps", e.target.value)}
          />
        </TableCell>
        <TableCell>
          <Input
            readOnly={editMode ? false : true}
            key={`weight_${i}`}
            type="number"
            placeholder="0"
            step="5"
            min={0}
            value={item.weight}
            onChange={(e) => handleEntryChange(i, "weight", e.target.value)}
          />
        </TableCell>
        <TableCell>
          <textarea
            readOnly={editMode ? false : true}
            className="p-0.5 text-sm resize-y bg-inherit border-neutral-50 w-full max-sm:h-20"
            key={`notes_${i}`}
            placeholder="Notes..."
            value={item.notes}
            onFocus={(e) => {
              e.target.style.border = '1px solid grey';
            }}
            onBlur={(e) => {
                e.target.style.border = '1px solid black';
            }} 
            onChange={(e) => handleEntryChange(i, "notes", e.target.value)}

          />
        </TableCell>
        {
          editMode ? 
          <TableCell className="flex justify-center max-sm:items-center max-sm:flex-col max-sm:justify-center">
            <Button onClick={(() => handleDelete(i))}  className="max-sm:w-5 max-sm:h-7">X</Button>
          </TableCell>
          : null
        }

      </TableRow>
        )
      }) : null
    }
    

  </>
  )
}
