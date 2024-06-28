import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-3 justify-center pt-14 pb-7">
        <h2 className="font-bold text-[46px] text-center">Find Home <span className="text-primary">Service & Treatment</span> <br/> Near You</h2>
        <h2 className='text-xl text-gray-400'>Explore Best Home Service & Treatment Near you</h2>
      <div className='mt-4 flex gap-4 items-center'>
            <Input placeholder='Search' className='rounded-full md:w-[350px]'/>
            <Button className="rounded-full h-[46px]">
              <Search className='h-4 w-4'/>
            </Button>
      </div>
    </div>
    
  )
}

export default Hero