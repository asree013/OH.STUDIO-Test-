'use client'
import React from 'react'
import './home.css'
import { Cats } from '@/models/Cats.model';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

import Image from 'next/image';

type Props = {
    data: Cats[]
}

export default function HomeCard({ data }: Props) {

    const router = useRouter()

    function onOver(el_id: string) {
        const el = document.getElementById(el_id)
        if(el){
            if(el.classList.contains('close_hover')){
                el.classList.remove('close_hover')
                el.addEventListener('mouseout', (e) => {
                    el.classList.add('close_hover')
                })
            }
        }
    }

    return (
        <>
            <div className="home_card ">

                {data.length > 0 ? data.map((r, index) => (
                    <div key={index} className="home_card_item" onMouseOver={() => onOver(r.id)}>
                        <div id={r.id} className="home_card_hover close_hover" onClick={() => window.location.href = '/profile/' + r.id}>
                            <div className="hover_item">
                                <p>{r.id}</p>
                                <div className="arrow_hover" onClick={() => window.location.href = '/profile/' + r.id}>
                                    <FontAwesomeIcon icon={faSquareArrowUpRight} />
                                </div>
                            </div>
                        </div>
                        <Image width={ 368 || 369 || 645 } height={248|| 302 || 485} src={r.url} alt={r.url} unoptimized />
                    </div>
                )) : (
                    <>
                        {[1, 2, 3, 4].map((_, index) => (
                            <div key={index} role="status" className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700" style={{ width: '496px', height: '496px' }}>
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    )
}


