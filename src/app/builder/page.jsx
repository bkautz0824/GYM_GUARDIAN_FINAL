import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
  import { TypographyH1, TypographyMuted, TypographyP, TypographyH3 } from '@/components/typography/Typography'
import { workouts } from '@/data/WorkoutData'
  

export default function Builder() {
  return (
    <Card className={`my-10 bg-violet-700`}>
        <CardHeader className="items-center bg">
            
            <TypographyH1 text={'Builder'}/>
            <TypographyMuted text={"Use this page to build your own workout!"}/>
        </CardHeader>
        <CardContent className="items-center">
          <div className="items-center p-4 space-x-4 border rounded-md ">
            <TypographyH3 text={"Choose a area of focus..."}/>
            
    
          </div>
         
            
        </CardContent>
      
    </Card>
  )
}
