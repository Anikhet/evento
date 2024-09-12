import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const routes = [
        {name: 'Terms & Conditions', path: '/terms-conditions'}
    ]
  return (
    <footer className='text-white/50 absolute bottom-3 px-4 flex justify-between w-full items-center text-sm'>
        <small> &copy; AnikhetMulky. All rights reserved.</small>
        <ul className=''>
            {routes.map(route => (
                <li key={route.path}>
                    <Link href={route.path}> {route.name}</Link>
                    
                </li> 
              ))}
        </ul>
    </footer>
  )
}

export default Footer