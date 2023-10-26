import React from 'react'
import { Button } from '../ui/button'
import {TypographyH1, TypographyP, TypographyH2 } from '@/components/typography/Typography'

export default function Hero(header, subtitle, body) {


  return (
    <div className='flex items-center justify-center w-full h-screen mb-12 bg-fixed bg-center custom-img'>
        <div className='absolute top-0 left-0 right-0 bg-black/70 z-[2]'/>
        <div className='p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]'>
            <TypographyH1 className='text-5'>Heading</TypographyH1>
            <TypographyP>Message</TypographyP>
            <Button className="border bg-primary">Click</Button>
        </div>
    </div>
  )
}
