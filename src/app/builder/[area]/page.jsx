"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
  import { TypographyH1, TypographyMuted, TypographyP, TypographyH3 } from '@/components/typography/Typography'
import { workouts } from '@/data/WorkoutData'

export default function AreaOfFOcus() {

    const {area} = useParams()

    console.log(area)
  return (
    <Card className={`m-5 bg-violet-700`}>
        <CardHeader className="items-center bg">
            
            <TypographyH1 text={'Builder'}/>
            <TypographyMuted text={"Use this page to start building your own workout!"}/>
        </CardHeader>
        <CardContent>
          
        </CardContent>

      
    </Card>
  )
}
