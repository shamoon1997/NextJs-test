import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Topexp = () => {

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
        <div className={`${fixed ? "flex justify-center opacity-[1] fixed right-5 md:right-10 bottom-10 md:bottom-0 py-12" : "flex justify-center fixed right-5 md:right-10 bottom-10 md:bottom-0 py-12 opacity-0 "} duration-300 ease-in-out `} style={{ transition: ".2s ease-in-out" }} >
            <Link href='/Experience'>
                <div className='bg-gray-900 rounded-full shadow-xl  shadow-gray-600 p-4 cursor-pointer hover:scale-[1.03] ease-in duration-300  ' >
                    <HiOutlineChevronDoubleUp className='m-auto text-[#5e51e5] ' size='30' />
                </div>
            </Link>
        </div>
    )
}

export default Topexp