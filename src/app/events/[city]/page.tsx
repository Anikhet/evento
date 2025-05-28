import EventsList from "@/components/events-list";
import HeroH1 from "@/components/header-h1";
import { EventoEvent } from "@/lib/types";
import { notFound } from "next/navigation";
import React from "react";

type EventsProps = {
  params: {
    city: string;
  };
};

const page = async ({ params }: EventsProps) => {
  const city = params.city;



  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
if (!response.ok) {
  notFound(); // this will show the 404 page
}


  const events : EventoEvent[] = await response.json();

  if (!events) {
    return {
      notFound: true,
    };
  }

  return (
    <main className="flex flex-col items-center py-16  min-h-[110vh] gap-14 ">
   <HeroH1>
      {city=== "all" && 'All Events'}
      {city !== "all" &&    `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </HeroH1>

      <EventsList events={events} />

      {/* {events.map((event: EventoEvent) => (
        <div
          key={event.id}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full max-w-[600px] mb-6"
        >
          <h2 className="text-xl font-semibold">{event.name}</h2>
          <p className="text-sm text-white/50">{new Date(event.date).toLocaleDateString()}</p>
          <p className="mt-2">{event.description}</p>
        </div>
      ))} */}


    </main>
  );
};

export default page;
