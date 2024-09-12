"use client"

import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const Header = () => {
   const activePath = usePathname()
   console.log(activePath)

   const routes = [
    {name: 'Home', path: '/'},
    {name: 'Events', path: '/events/all'}
   ]

  return (
    <header className='flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9 '>
        <Logo/>
        <nav>
            <ul className=' flex gap-x-6 text-sm h-full'>
                {routes.map(route => (
                <li className='h-full relative' key={route.path}>
                    <Link href={route.path}
                     className={`text-sm ${activePath === route.path ? 'text-white' : 'text-white/50'} hover:text-white transition`}>{route.name}
                    </Link>

                    {activePath === route.path &&
                    <motion.div
                    layoutId='Smooth-active' className='bg-accent h-1 w-full absolute bottom-[-90%]'>

                    </motion.div>
                    
}


                </li>
                ))}
            
            </ul>

            {/* <ul className=' flex gap-x-6 text-sm text-white/50 '>
                <li className={`${activePath === '/' && "text-white"} hover:text-white transition` }>
                    <Link href="/"> Home</Link>
                </li>
                <li className={`${activePath === '/events/all' && "text-white"} hover:text-white transition` }>
                    <Link href="/events/all"> Events </Link>
                </li>
            </ul> */}
        
          </nav>
    </header>
  )
}

export default Header