import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='text-white p-2 '>
            {children}
        </main>

    )
}
