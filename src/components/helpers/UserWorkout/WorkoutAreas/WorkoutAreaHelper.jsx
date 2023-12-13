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

export default function WorkoutAreaHelper({data, parentIndex, editMode, handleInputChange}) {

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
  
      console.log(updatedState);
  
      // Assuming parentIndex is defined elsewhere in your code
      handleInputChange(parentIndex, updatedState);
  
      return updatedState;
  
  };



  return (
    <>

    {
      data ? data.map((item, i) => {


      return(
      <TableRow key={i} className={`h-10 bg-secondary/80 `} id={`${item.profile}_${i}_cell`}>

        <TableCell className="font-medium">{item.profile}</TableCell>
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
            className="p-0.5 text-sm resize-y bg-inherit border-neutral-50 w-full"
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
          <TableCell className="flex justify-center">
            <Button>X</Button>
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
