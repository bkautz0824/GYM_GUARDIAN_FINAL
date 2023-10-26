'use client'
import React from 'react'
import MyResponsiveRadar from '@/components/recharts/RadarChartComponent'
import CardContainer from '@/components/shadcn-ui/CardContainer'

// import BarChartComponent from '@/components/recharts/BarChartComponent'

export default function DataDisplay() {
  return (
    <CardContainer >
        <MyResponsiveRadar />
    </CardContainer>
  )
}
