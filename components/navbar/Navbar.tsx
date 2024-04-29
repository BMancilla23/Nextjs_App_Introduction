

import Link from 'next/link'
import React from 'react'
import { Home } from 'lucide-react'
import { ActiveLink } from '../active-link'

type Props = {}

const NAVITEMS = [
  {
    path: '/about', text: 'About'
  },
  {
    path: '/pricing', text: 'Pricing'
  },
  {
    path: '/contact', text: 'Contact'
  }
] as const

const Navbar = (props: Props) => {
  
  return (
    <nav className='flex bg-gray-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href='/' className='flex items-center'>
        <Home size={20} />
        <span className='ml-2'>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {
        /* NAVITEMS.map(({path, text}) => (
          <ActiveLink key={path} path={path} text={text} />
        )) */

        NAVITEMS.map((navItem) => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      }
    </nav>
  )
}

export default Navbar