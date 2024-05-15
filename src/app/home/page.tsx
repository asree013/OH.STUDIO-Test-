'use client'
import React, { useEffect, useState } from 'react'
import './home.css'
import AppNav from '@/components/AppNav'
import HomeHeader from './HomeHeader'
import HomeCard from './HomeCard'
import { getAllCats } from '@/services/cats.service'
import { Cats } from '@/models/Cats.model'
import Footter from '@/components/Footter'
import HomeFootter from './HomeFootter'
import HomeShopt from './HomeShopt'

export default function page() {
  const [tagCat, setTagCat] = useState<Cats[]>({} as Cats[])
  const tagValue = [
    'Expertise',
    'Branding',
    'Product',
    'Design Systems',
  ]

  useEffect(() => {
    (async () => {
      let content = document.getElementById('content')
      let footer = document.getElementById('footer')
      footer?.classList.remove('fade-up')
      try {
        const result = await getAllCats(10)
        setTagCat(result.data)

        if (content && footer) {
          window.addEventListener('scroll', () => {
            if (window.scrollY > footer.offsetHeight + 600) {
              footer.classList.add('fade-up')
            }
          })
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])
  return (
    <>
      <div id='content'>
        <AppNav />
        <HomeHeader value={tagValue} />
        <HomeCard data={tagCat} />
      </div>
      <div id='footer'>
        <HomeFootter />
      </div>
      <Footter />
      <HomeShopt />
    </>
  )
}
