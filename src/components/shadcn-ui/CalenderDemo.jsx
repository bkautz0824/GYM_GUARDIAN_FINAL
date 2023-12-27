"use client"

import { react, useState } from "react"
import { Calendar } from "@/components/ui/calendar"



export function CalendarDemo() {
  const [date, setDate] = []

  return (
    <Calendar
      mode="multiple"
      // numberOfMonths={1}
      selected={[
        new Date(2023, 11, 25),
        new Date(2023, 12, 12),
        new Date(2023, 12, 20),
      ]}
      onSelect={setDate}
      className="border rounded-md"
    />
  )
}
