// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    // <Image src="/Evento.webp" alt='Evento-Logo' width={53} height={53} />
  
    <Link href="/" className='text-xl font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent animate-pulse transition-transform duration-500 hover:scale-110'>Evento</Link>
    

  )
}

export default Logo