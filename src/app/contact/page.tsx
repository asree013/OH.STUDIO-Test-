'use client'
import AppNav from '@/components/AppNav'
import React from 'react'
import './contact.css'
import Footter from '@/components/Footter'
import { metadata } from '../layout'

export default function page() {
  return (
    <>
        <div className="contact_main fade-up-text">
          <h1>{`Let's work together.`}</h1>
          <a href="">Get in touch.</a>
        </div>
        <Footter />
    </>
  )
}
