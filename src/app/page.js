import Image from 'next/image'
import { TypographyH1 } from '@/components/typography/Typography'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
     <TypographyH1 text={"Hellooooo"}/>
    </main>
  )
}
