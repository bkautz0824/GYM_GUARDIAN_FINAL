import Image from 'next/image'
import { TypographyH1 } from '@/components/typography/Typography'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"


export default function Home() {
  return (
    <main className="flex min-h-screen p-5 justify-evenly">
     <TypographyH1 text={"Hellooooo"}/>
     <Link href="/builder" className={buttonVariants({ variant: "outline" })+ " bg-green-700"}>Builder</Link>
    </main>
  )
}
