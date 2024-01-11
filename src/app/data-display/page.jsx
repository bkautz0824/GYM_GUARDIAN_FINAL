'use client'
import React, {useState, useEffect} from 'react'
import { Card } from '@/components/ui/card'
import DataGridDisplay from '@/components/recharts/DataGridDisplay';
import { TypographyH1 } from '@/components/typography/Typography';
import RadarChartDisplay from '@/components/recharts/RadarChart';
import { BarGraphDisplay } from '@/components/shadcn-ui/BarGraphDisplay'
import {CustomActiveShapePieChart1, CustomActiveShapePieChart2} from '@/components/recharts/CustomShapePieChart';


export default function DataDisplay () {
  // const session = await getServerSession()

  React.useEffect(() => {

      const getExercises = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/workouts", {
            method: "GET",
          });
      
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
      
          const res = await response.json();
          console.log(res.data)
          
          return res.data; // You should return the data you fetched
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle the error, e.g., display an error message to the user
          throw error; // Rethrow the error to propagate it to the caller
        }
      };

      getExercises()



  }, [])



  return (

    <div className='mx-4'>
      <TypographyH1 text="Annual Data"/>
      <Card className="flex py-2 m-2 justify-evenly">

        
        <BarGraphDisplay />
        <RadarChartDisplay />


      </Card>
      <DataGridDisplay />
    
      <TypographyH1 text="Monthly Data"/>
      <Card className="flex py-2 m-2 justify-evenly">
      
        <BarGraphDisplay />
        <RadarChartDisplay />


      </Card>
      <DataGridDisplay />
      <div className='flex'>
      <CustomActiveShapePieChart1 />

      <CustomActiveShapePieChart2 />

      <CustomActiveShapePieChart1 />

      <CustomActiveShapePieChart2 />
      </div>

   
    </div>
    
   
  )
}
