
import HeroH1 from '@/components/header-h1'
import SearchForm from '@/components/search-form'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <main className=' flex flex-col items-center justify-center pt-36 px-3'>
  <HeroH1>Find events near you!</HeroH1>
    <p className='mb-12 mt-7 text-2xl lg:text-3xl opacity-75'>Out of <span className=' font-semibold italic underline text-[#a4f839]'> 10000 events</span>, find the one that excites you!</p>

   <SearchForm/>
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