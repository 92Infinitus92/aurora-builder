import { User } from '@clerk/nextjs/server'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

type Props = {
    user?: null | User
}

const Navigation = ({user}: Props) => {
  return (
    <div className='p-4 flex items-center justify-between relative'>
        <aside className='flex items-center gap-2'>
        <Image src={"/assets/plura-logo.svg"} width={40} height={40} alt='logo'/>
        <span className='text-xl font-cold'>Aurora.</span>
        </aside>
        <nav className='hidden md:block absolute left-[50%] right-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
            <ul className='flex items-center justify-center gap-8'>
                <Link href={"/"}>Pricing</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Documentation</Link>
                <Link href={"/"}>Features</Link>
            </ul>
        </nav>
        </div>
  )
}

export default Navigation