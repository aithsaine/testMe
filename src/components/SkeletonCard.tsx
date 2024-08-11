import React from 'react'

const SkeletonCard = () => {
    return (
        <div
            style={{ minWidth: "200px", backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227, 228, 237, 0.37)", border: " 2px solid rgba(255, 255, 255, 0.18)" }}
            className="flex flex-col w-1/6 justify-between border-2 p-2 rounded m-2 animate-pulse"
        >
            <div className="bg-gray-700 h-6 rounded-md mb-2"></div>

            <div className="bg-gray-600 h-0.5 w-full mb-2"></div>

            <div className="flex flex-col space-y-2">
                <div className="bg-gray-700 h-4 rounded-md w-3/4"></div>
                <div className="bg-gray-700 h-4 rounded-md w-1/2"></div>
                <div className="bg-gray-700 h-6 rounded-md w-full"></div>
            </div>

            <div className="bg-gray-800 h-8 rounded-md mt-4"></div>
        </div >

    )
}

export default SkeletonCard