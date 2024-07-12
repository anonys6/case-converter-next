'use client'

import React from 'react'
import styles from '@/styles/Hamburger.module.css';
import { ArrowUpRight, Menu } from 'lucide-react';
import Link from 'next/link';
import NavbarLinks from './NavbarLinks';

function Hamburger() {
    const handleClick = () => {
        document.getElementsByClassName(styles.hamburgerDropdown)[0].classList.toggle(styles.show);

    }

    return (
        <div className={styles.container}>
            {/* <Menu className={styles.hamIcon}
                onClick={handleClick}
            /> */}
            <label className={styles.burger} htmlFor="burger">
                <input
                    type="checkbox"
                    id="burger"
                    onChange={handleClick}
                />
                <span></span>
                <span></span>
                <span></span>
            </label>

            <ul className={styles.hamburgerDropdown}>
                <NavbarLinks />
            </ul>
        </div>
    )
}

export default Hamburger