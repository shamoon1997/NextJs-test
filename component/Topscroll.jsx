import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Topscroll = () => {

    const [fixed, setFixed] = useState(false)

    const FixedChange = () => {
        if (window.scrollY >= 100) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", FixedChange)
    }, [])

    return (
        <div className={`${fixed ? "flex justify-center opacity-[1] fixed right-10 bottom-5 py-12" : "flex justify-center fixed right-10 bottom-[-200px] py-12 opacity-0 "} duration-300 ease-in-out `} style={{ transition: ".5s ease-in-out" }} >
            <Link href='/'>
                <div className='bg-gray-900 rounded-full shadow-xl  shadow-gray-600 p-4 cursor-pointer hover:scale-[1.03] ease-in duration-300  ' >
                    <HiOutlineChevronDoubleUp className='m-auto text-[#5e51e5] ' size='30' />
                </div>
            </Link>
        </div>
    )
}

export default Topscroll