import React from 'react'
import { DNA, FidgetSpinner } from "react-loader-spinner"

export default function Loader() {

    return (
        <main className='flex items-center justify-center h-screen'>
            <FidgetSpinner
                visible={true}
                height="100"
                width="100"
                ariaLabel="fidget-spinner-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </main>
    )
}
