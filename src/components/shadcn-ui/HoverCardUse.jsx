import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  
export default function HoverCardUse({displayText, content}) {
  return (
    <HoverCard>
        <HoverCardTrigger >{displayText}</HoverCardTrigger>
        <HoverCardContent>
            {content}
        </HoverCardContent>
    </HoverCard>

  )
}
