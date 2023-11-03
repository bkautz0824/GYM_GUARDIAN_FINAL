import Image from 'next/image'
import { TypographyH1, TypographyP } from '@/components/typography/Typography'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import Hero from '@/components/shadcn-ui/Hero'
import CardContainer from '@/components/shadcn-ui/CardContainer'

export default function Home() {
  return (
    <div className='top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-img backdrop-blur z-1'>
        {/* <div className='absolute top-0 left-0 right-0 bg-black/60 z-[2]'/> */}
        <div className='flex p-5 text-white z-[2] justify-between w-1/2'>
        
          
          <Link href="/builder" className={buttonVariants({ variant: "default" })+ "  shadow-md shadow-black/50 text-white"}>View My Workouts</Link>
          <Link href="/builder" className={buttonVariants({ variant: "secondary" })+ "  shadow-md shadow-black/50 text-white"}>Create New Workout</Link>
          <Link href="/data-display" className={buttonVariants({ variant: "default" })+ " shadow-md shadow-black/50 text-white"}>My Workout Data</Link>
          <Link href="/calender" className={buttonVariants({ variant: "secondary" })+ "  shadow-md shadow-black/50 text-white"}>Calendar</Link>

        </div>
          
    </div>
    
    // <main className="flex min-h-screen p-5 justify-evenly">
    //  <TypographyH1 text={"Hellooooo"}/>



    // </main>

  )
}
