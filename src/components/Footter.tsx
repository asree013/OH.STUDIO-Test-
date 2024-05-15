'use client'
import React from 'react'
import './css/footter.css'

export default function Footter() {

    const contact: string[] = [
        'Twitter', 'Linkedin', 'Mail'
    ]
    return (
        <>
            <div className="conteact_footer">
                <div className="contact_logo">
                    <p>© Oli Harris 2023</p>
                </div>
                <div className="contact_detail">
                    {
                        contact.map(r => 
                            <p key={r}>{r}</p>
                        )
                    }
                </div>
            </div>
        </>
    )
}
