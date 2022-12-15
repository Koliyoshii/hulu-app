import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import { HomeIcon, BoltIcon, CheckBadgeIcon, Square3Stack3DIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'

function Header() {
  return (
    <header className='flex flex-col md:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title={"HOME"} Icon={HomeIcon}  />
            <HeaderItem title={"TRENDING"} Icon={BoltIcon}  />
            <HeaderItem title={"VERIFIED"} Icon={CheckBadgeIcon}  />
            <HeaderItem title={"COLLECTIONS"} Icon={Square3Stack3DIcon}  />
            <HeaderItem title={"SEARCH"} Icon={MagnifyingGlassIcon}  />
            <HeaderItem title={"ACCOUNT"} Icon={UserIcon}  />
        </div>
        
        <Image src="/images/hulu-white.webp" alt='Hulu Logo' width={200} height={100} />
    </header>
  )
}

export default Header