"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const SearchForm = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`/events/${search}`)
        if (!search) return
      
    }
  return (
    <form onSubmit={handleSubmit} className=' w-full sm:w-[580px]'>
    <input 
    className='w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-[#a4f839]/50 transition focus:ring-2 focus:bg-white/10' 
    type="text" 
    placeholder="Search events in your city" 
    spellCheck={false}
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
  </form>
  )
}

export default SearchForm