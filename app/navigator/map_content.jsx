"use client"

import Image from 'next/image'
import Map from '@/components/map'
import useSWR from 'swr'

export default function MapContent() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/locations`, fetcher)

    console.log(data)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div className='flex flex-row h-screen w-full'>
            <div className="flex-grow">
            <Map
                places={[
                {
                    location: [
                        40.8518, 14.2681
                    ],
                    description: "Naples"
                }, {
                    location: [
                        40.8518, 14.2681
                    ],
                    description: "Naples"
                }
            ]}/>
            </div>
        </div>
    )
}
