import Navigation from '@/components/site/navigation'
import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

const layout = ({children}: LayoutProps) => {
  return (
    <div className='h-full'>
        <Navigation/>
        {children}</div>
  )
}

export default layout