'use client'

import React from 'react'
import styles from '@/styles/Hamburger.module.css';
import { ArrowUpRight, Menu } from 'lucide-react';
import Link from 'next/link';

function Hamburger() {
    const handleClick = () => {
        document.getElementsByClassName(styles.hamburgerDropdown)[0].classList.toggle(styles.show);

    }

    return (
        <div className={styles.container}>
            <Menu className={styles.hamIcon}
                onClick={handleClick}
            />

            <ul className={styles.hamburgerDropdown}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/camel-case">camelCase</Link></li>
                <li><Link href="/kebab-case">kebab-case</Link></li>
                <li><Link href="/pascal-case">PascalCase</Link></li>
                <li><Link href="https://www.advancedtexteditor.com/">Advanced Text Editor <ArrowUpRight /></Link></li>
            </ul>
        </div>
    )
}

export default Hamburger