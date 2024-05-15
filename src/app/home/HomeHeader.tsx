'use client'
import React from 'react'

type Props ={
    value: string[]
}

export default function HomeHeader({value}: Props) {
  return (
    <div className="home_header fade-up-text">
        <h1>A brand and product designer working with clients globally</h1>
        <div className="tag_cat">
            {
                value.map(r => 
                    <p key={r}>{r}</p>
                )
            }
        </div>
    </div>
  )
}
