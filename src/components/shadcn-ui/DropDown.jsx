import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from 'next/link'
  
export default function DropDown({display, label, items}) {
  
  let isArray = typeof items !== 'string' ? true : false;
  console.log(typeof items, items)

  return (
    <DropdownMenu >
    <DropdownMenuTrigger >{display}</DropdownMenuTrigger>
    <DropdownMenuContent >
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {
          !isArray ? <DropdownMenuItem>{items}</DropdownMenuItem> :
          items.map((workout) => {
            return(
              <DropdownMenuItem key={Math.random()}>{workout}</DropdownMenuItem>
            )
          })
        }
        {/* <DropdownMenuItem>
          <Link href='/home'>Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
    </DropdownMenuContent>
    </DropdownMenu>

  )
}
