'use client'
import React from 'react'
import './css/appnav.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function AppNav() {
    const paths: string[] = [
        'Home',
        'Profile',
        'Contact'
    ]
    const pathName = usePathname()
    React.useEffect(() => {
        function onChangeSelectPaht() {
            switch (true) {
                case pathName.includes(paths[0].toLocaleLowerCase()):
                    return document.getElementById(paths[0].toLocaleLowerCase())?.classList.add('on_select')
                case pathName.includes(paths[1].toLocaleLowerCase()):
                    return document.getElementById(paths[1].toLocaleLowerCase())?.classList.add('on_select')
                case pathName.includes(paths[2].toLocaleLowerCase()):
                    return document.getElementById(paths[2].toLocaleLowerCase())?.classList.add('on_select')
            }
        }
        console.log(pathName);

        onChangeSelectPaht()
    })
    return (
        <nav>
            <div className="nav_menu_item">
                {
                    paths.map(r =>
                        <Link id={r.toLocaleLowerCase()} href={'/' + r.toLocaleLowerCase()} key={r}>
                            {r}
                        </Link>
                    )
                }
            </div>
        </nav>
    )
}
