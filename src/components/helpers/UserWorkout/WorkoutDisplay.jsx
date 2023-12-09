import React from 'react'
import {useEffect, useState} from 'react'
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
  import TableRowComponent from '../TableRowComponent'
  import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
  
import { Button } from "@/components/ui/button"


export default function WorkoutDisplay({workout}) {
  const [display, setDisplay] = React.useState(true)

    console.log(workout)
  return (
    <div>
     {workout ? (
        Object.keys(workout).map((key) => {
          let value = workout[key];

          if (typeof value === 'number' || typeof value === 'string') {
            console.log(value);
            return (
              <React.Fragment key={key}>
                <p>{key}: {value ? value : "No value inputted"}</p>
              </React.Fragment>
            );
          }

          return null; // Skip rendering if the value is not a number or string
        })
      ) : (
        <p>No workout data available</p>
      )}
     
    </div>
  )
}
