import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
  import { TypographyH1, TypographyMuted, TypographyP, TypographyH3 } from '@/components/typography/Typography'
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import TableRowComponent from '../TableRowComponent'
  import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import WorkoutAreaHelper from './WorkoutAreas/WorkoutAreaHelper'

export default function WorkoutAreasDisplay({workoutData}) {

    const [display, setDisplay] = React.useState(true)
  return (
    <div>
    <>
       {
       workoutData ? workoutData.map((item, ) => {
          console.log(item)
          return (
            <Card className="flex flex-wrap p-4 m-2" >
            
              <p>
                {item.name} x{item.data.length}
              </p>
              <Table>
              <TableRow >
                <TableHead className="w-[150px] text-slate-500">Muscle Profile</TableHead>
                <TableHead className="w-[150px] text-slate-500">Reps</TableHead>
                <TableHead className="w-[150px] text-slate-500">Weight</TableHead>
                <TableHead className="w-[150px] text-slate-500">Notes</TableHead>
                <TableHead className="w-[150px] text-slate-500">Action</TableHead>
                </TableRow>
              <WorkoutAreaHelper data={item.data}/>
              </Table>
            </Card>
          )
        }) : null
       }
        
      </>
    </div>
  )
}
