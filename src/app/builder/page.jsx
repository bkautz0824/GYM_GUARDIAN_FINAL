import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
  import { TypographyH1, TypographyMuted, TypographyP, TypographyH3 } from '@/components/typography/Typography'
import { workouts } from '@/data/WorkoutData'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
  

export default function Builder() {
  return (
    <Card className={`my-10 bg-violet-700`}>
        <CardHeader className="items-center bg">
            
            <TypographyH1 text={'Builder'}/>
            <TypographyMuted text={"Use this page to start building your own workout!"}/>
        </CardHeader>
        <CardContent>
            <div className="p-4 space-x-4 border rounded-md ">
                <TypographyH3 text={"Select an area of focus..."} />
                {
                workouts.map((item) => {
                    return(
                        <div className='flex justify-center m-4 '>
                         <Link href={`builder/${item.muscle_group}?`}>{item.muscle_group}</Link>
                        </div>
                   
                    )
                    
                })
            }
            </div>
        </CardContent>

      
    </Card>
  )
}
