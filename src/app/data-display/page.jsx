'use client'
import React from 'react'
import { Card } from '@/components/ui/card'
import DataGridDisplay from '@/components/recharts/DataGridDisplay';
import { TypographyH1 } from '@/components/typography/Typography';


import RadarChartDisplay from '@/components/recharts/RadarChart';
import { BarGraphDisplay } from '@/components/shadcn-ui/BarGraphDisplay'
import {CustomActiveShapePieChart1, CustomActiveShapePieChart2} from '@/components/recharts/CustomShapePieChart';

export default function DataDisplay() {
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
