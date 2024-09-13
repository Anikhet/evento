import HeroH1 from '@/components/header-h1'
import React from 'react'

type EventsProps = {
  params: {
    city: string
  }
}

const page = ({params } : EventsProps) => {
  const city = params.city


  return (
    <main className='flex flex-col items-center py-16  min-h-[110vh] '>
   <HeroH1>Events in {city.charAt(0).toUpperCase() + city.slice(1)}</HeroH1>

    </main>
  )
}

export default page