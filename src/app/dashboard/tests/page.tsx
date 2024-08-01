import TestCard from '@/components/TestCard'
import React from 'react'

export default function Page() {
    return (
        <div className='flex flex-wrap'>
            <TestCard name={"PHP"} duration={25} isPassed={false} />
            <TestCard name={"Math"} duration={25} isPassed={false} />
            <TestCard name={"Physic"} duration={25} isPassed={true} />
            <TestCard name={"science"} duration={25} isPassed={false} />
            <TestCard name={"science"} duration={25} isPassed={false} />
            <TestCard name={"science"} duration={25} isPassed={false} />
            <TestCard name={"science"} duration={25} isPassed={false} />
            <TestCard name={"science"} duration={25} isPassed={false} />
            <TestCard name={"science"} duration={25} isPassed={false} />
        </div>
    )
}
