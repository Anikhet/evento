
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <main className=' flex flex-col items-center justify-center pt-36 px-3'>
    <h1 className='text-3xl lg:text-6xl font-bold tracking-tight '>Find events around you!</h1>
    <p className='mb-12 mt-7 text-2xl lg:text-3xl opacity-75'>Out of <span className=' font-semibold italic underline text-[#a4f839]'> 10000 events</span>, find the one that excites you!</p>

    <form className=' w-full sm:w-[580px]'>
      <input className='w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-[#a4f839]/50 transition focus:ring-2 focus:bg-white/10' type="text" placeholder="Search events in your city" spellCheck={false}/>
    </form>
    <section className='mt-4 flex gap-x-4 text-sm text-white/50'>
      <p>Popular : </p>
      <div className='space-x-2 font-semibold'>
        <Link href="/events/newyork">New York</Link>
        <Link href="/events/boston">Boston</Link>
      </div>
    </section>
   </main>
  )
}

export default page