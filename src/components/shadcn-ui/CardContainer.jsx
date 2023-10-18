import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { TypographyH1, TypographyMuted, TypographyP,TypographyH3 } from '../typography/Typography'
  
export default function CardContainer({title, id, bgColor}) {

  let background = bgColor ? bgColor : "bg-slate-400"
  return (
    <Card className={`my-10 ${background}`}>
        <CardHeader className="items-center bg">
            
            <TypographyH1 text={title}/>
            <TypographyMuted text={"Description"}/>
        </CardHeader>
        <CardContent className="items-center">
          <div className="items-center p-4 space-x-4 border rounded-md ">
            <TypographyH3 text={"SubTitle"}/>
            <TypographyP text={"This is some example text that I am using for testing. Lorem Ipssum Lorem IpssumLorem IpssumLorem IpssumLorem Ipssum This is some example text that I am using for testing. Lorem Ipssum Lorem IpssumLorem IpssumLorem IpssumLorem IpssumThis is some example text that I am using for testing. Lorem Ipssum Lorem IpssumLorem IpssumLorem IpssumLorem Ipssum"}
            />
          </div>
         
            
        </CardContent>
        <CardFooter className="items-center">
          <TypographyP text={"This is some example text that I am using for a Card Footer."}/>
          
        </CardFooter>
    </Card>

  )
}
