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

export default function WorkoutAreaHelper({data, i}) {

  return (
    <>
    {/* {data.length > 0
      ? data.map((item, i) => {
          console.log(item);
          return (
            
            <TableRow key={`${item.profile}_${i}`}>
            <TableCell></TableCell>
            </TableRow>
          );
        })
      : null
    } */}
    {
      data ? data.map((item, i) => {


      return(
      <TableRow key={i} className={`h-10 bg-secondary/80 `} id={`${item.profile}_${i}_cell`}>

        <TableCell className="font-medium">{item.profile}</TableCell>
        <TableCell >
          <Input
            key={`reps_${i}`}
            value={item.reps}
            type="number"
            min={0}
            placeholder="0"
            onChange={(e) =>console.log("reps")}
            // onChange={(e) => handleChange(index, "reps", e.target.value, i)}
          />
        </TableCell>
        <TableCell>
          <Input
            key={`weight_${i}`}
            type="number"
            placeholder="0"
            step="5"
            min={0}
            value={item.weight}
            onChange={(e) =>console.log("weight")}
            // onChange={(e) => handleChange(index, "weight", e.target.value, i)}
          />
        </TableCell>
        <TableCell>
          <textarea
            className="p-0.5 text-sm resize-y bg-inherit border-neutral-50"
            key={`notes_${i}`}
            placeholder="Notes..."
            value={item.notes}
            onFocus={(e) => {
              e.target.style.border = '1px solid grey';
            }}
            onBlur={(e) => {
                e.target.style.border = '1px solid black';
            }} 
            onChange={(e) =>console.log("notes")}
            // onChange={(e) => handleChange(index, "notes", e.target.value, i)}
          />
        </TableCell>
        <TableCell>
          {/* <Button className="shadow-sm bg-secondary shadow-inherit" variant="ghost" onClick={() => handleDelete(index, i, name)}>
            X
          </Button> */}
        </TableCell>
      </TableRow>
        )
      }) : null
    }
    

  </>
  )
}
