import React from 'react'

type Props = {
  children: React.ReactNode
}

const HeroH1 = ({ children }: Props) => {
  return (
    <h1 className='text-3xl lg:text-6xl font-bold tracking-tight'>
      {children}
    </h1>
  )
}

export default HeroH1
