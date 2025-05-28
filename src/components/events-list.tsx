import { EventoEvent } from '@/lib/types'
import React from 'react'
import EventCard from './eventcard'

type EventsListProps = {
    events: EventoEvent[]
}

const EventsList = ({events}:EventsListProps) => {
  return (
    <section className='flex flex-wrap gap-10 max-w-[1100px] justify-center  '>
             {events.map((event: EventoEvent) => (
                <EventCard key={event.id} event={event}/>
      
      ))}
    </section>
  )

}

export default EventsList