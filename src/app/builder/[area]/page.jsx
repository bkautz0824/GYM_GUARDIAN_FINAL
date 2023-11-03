"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
import { TypographyLarge, TypographyH1, TypographyMuted, TypographyP, TypographyH3 } from '@/components/typography/Typography'
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useSearchParams } from 'next/navigation'
import TableRowComponent from '@/components/helpers/TableRowComponent'

export default function AreaOfFocus() {

  const searchParams = useSearchParams()
  const exercises = searchParams.getAll("exercises")
  const {area} = useParams()

  const [open, setOpen] = React.useState(false)
  const [state, setState] = React.useState([]);


  const handleValue = (selectedValue) => {
    console.log(selectedValue);
    setState([
      ...state,
      {
        name: selectedValue,
        reps: 0,
        weight: 0,
        notes: "",
      }
    ]);
  };
  

  const handleDelete = (index) => {
    const newValue = state.filter((item, i) => i !== index);
    setState(newValue);
  };
  

  const handleChange = (rowIndex, key, value) => {

    console.log(value)
    const newValue = [...state];
    console.log(newValue[rowIndex][key])
    newValue[rowIndex][key] = value;
    setState(newValue);
  };
  

  
  return (
    <Card className={`m-5 bg-primary shadow-xl shadow-white/50 text-primary`}>
        <CardHeader className="items-center text-slate-500">
            
            <TypographyH1 text={area}/>
            <TypographyP text={"Use this page to start building your own workout!"}/>
        </CardHeader>
        <CardContent>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="secondary"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between mx-2 text-slate-500"
            >
             
                Select framework...
              <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." className="h-9" />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {exercises ? exercises.map((exercise) => (
                  <CommandItem
                    key={Math.random()}
                    onSelect={() => {
                      handleValue(exercise)
                      setOpen(false)
                    }}
                  >
                    {exercise}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        
                      )}
                    />
                  </CommandItem>
                )) : null}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      { state ? 
        <Table>
          <TableCaption  className="text-secondary">Fill in your set details.  Set the reps, add more sets and write down any additional notes.</TableCaption>
          <TableHeader>
            <TableRow >
              <TableHead className="w-[150px] text-slate-500">Exercise</TableHead>
              <TableHead  className="w-[150px] text-slate-500">Reps</TableHead>
              <TableHead className="w-[150px] text-slate-500">Weight</TableHead>
              <TableHead  className="w-[150px] text-slate-500">Notes</TableHead>
              <TableHead  className="w-[150px] text-slate-500">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {
            state.map((item, i) => (
              <TableRowComponent
                key={i}
                name={item.name}
                reps={item.reps}
                weight={item.weight}
                notes={item.notes}
                index={i}
                handleChange={handleChange}
                handleDelete={handleDelete}
              />
            ))
          }
           
          </TableBody>
        </Table>
        :
        null
      }
        </CardContent>

      {/* <Button
      
        className={"bg-primary"}
        onClick={() => console.log(value)}
      >
        Submit Set Data
      </Button> */}
    </Card>
  )
}
