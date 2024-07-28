import { cookies } from 'next/headers'
import React from 'react'

export default function Page() {
    console.log(cookies().get("authenticate")?.value)
    return (
        <div className='flex items-center min-h-screen justify-center text-white text-4xl'>This is dashboard</div>
    )
}






