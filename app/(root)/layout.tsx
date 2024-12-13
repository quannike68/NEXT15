import React, { Suspense } from 'react'
import Navbar from '@/app/components/Navbar'


const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <main className='font-work-sans'>
      <Navbar />

      {children}
    </main >
  )
}

export default layout
