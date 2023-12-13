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


export default function WorkoutDisplay({workout}) {
  // const [display, setDisplay] = React.useState(true)

  return (
    <Card className="p-6">
     {workout ? (
        Object.keys(workout).map((key) => {
         
          let valueInput = workout[`${key}`].value
          if (typeof valueInput === 'number' || valueInput === 'string') {
            let label = workout[`${key}`].label 
            let description = workout[`${key}`].description 
            return (
              <div key={key} className='m-2 '>
                
                <span className='flex items-center'>
                  <h3 className='mr-2'>{label}: </h3>
                  <TypographyMuted text={description}/>

                  
                </span>
                <Input className="w-16" label={label} value={valueInput} onChange={() => console.log("here")}/>
              </div>
            );
          }else{
            return null;
          }

        })
      ) : (
        <p>No workout data available</p>
      )}
     
    </Card>
  )
}
