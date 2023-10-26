import Image from 'next/image'
import { TypographyH1, TypographyP } from '@/components/typography/Typography'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import Hero from '@/components/shadcn-ui/Hero'
import CardContainer from '@/components/shadcn-ui/CardContainer'

export default function Home() {
  return (
    <div className='flex items-center justify-center w-full h-screen mb-12 bg-fixed bg-center custom-img'>
        <div className='absolute top-0 left-0 right-0 bg-black/60 z-[2]'/>
        <div className='flex p-5 text-white z-[2] '>
        
            <Link href="/builder" className={buttonVariants({ variant: "default" })+ " bg-primary"}>Create New Workout</Link>
        </div>
        <Link href="/builder" className={buttonVariants({ variant: "default" })+ " bg-primary"}>View Workout Records</Link>
    </div>
    // <main className="flex min-h-screen p-5 justify-evenly">
    //  <TypographyH1 text={"Hellooooo"}/>



    // </main>

  )
}
