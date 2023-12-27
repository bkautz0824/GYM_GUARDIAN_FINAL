"use client"

import { react, useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"



export default function CalendarDemo() {
  const [date, setDate] = useState([])

  useEffect(() => {
    console.log("found ya")
    const fetchEditWorkout = async () =>{
       try{
           const response = await fetch(`http://localhost:3000/api/workout`,
           {
           method: "GET",
           headers: {
               'Content-Type': 'application/json',
               // Add any additional headers if needed
             },}
           )
           if (response.ok) {
             const data = await response.json();
             
             data.data.map((item) => {
              let dateString = item.date;
              let dateObject = new Date(dateString);

              let year = dateObject.getFullYear();
              let month = dateObject.getMonth(); 
              let day = dateObject.getDate();
              console.log(year, month, day)
              let newDate = new Date(year, month, day)
              
              setDate((prevDate) => [...prevDate, newDate]);
             })
            
           } 
           // else {
           //   console.error("Error:", response.status, response.statusText);
           // }

       }catch (error){
           console.error("Error")
       }
  
    } 
 fetchEditWorkout()
  }, [])
 

  const dateSelect = (value) => {
    console.log(value)
  }


  return (
    <div className="flex flex-wrap items-center justify-center w-full mx-auto ">      
    <Calendar
      mode="multiple"
      numberOfMonths={6}
      selected={date}
      modifiersClassNames={{
        selected:'bg-primary text-white',
        today: 'bg-secondary'
      }}
      onSelect={dateSelect}
      className="flex flex-wrap w-4/5 border rounded-md"
    />
    </div>
  )
}



