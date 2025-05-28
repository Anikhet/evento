import { EventoEvent } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type EventCardProps = {
  event: EventoEvent
}

const EventCard = ({event}:EventCardProps) => {
  return (
    <Link href={`/event/${event.slug}`}> 
          <div
        
          className="bg-white/5 backdrop-blur-sm rounded-lg flex-1 basis-80 p-6 w-full max-w-[400px] hover:scale-105 active:scale-[1.02] "
        >
            <Image src={event.imageUrl} alt={event.name} width={500} height={500} className="rounded-lg mb-4 h-[60%] object-fit " />
          <h2 className="text-xl font-semibold">{event.name}</h2>
          <p className="text-sm text-white/50">{new Date(event.date).toLocaleDateString()}</p>
               <p className="text-sm text-white/50">{event.location}</p>
          {/* <p className="mt-2">{event.description}</p> */}
        </div>
  </Link>

  )
}

export default EventCard