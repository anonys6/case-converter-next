import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import ToggleContainer from './ToggleContainer';
import Hamburger from './Hamburger';
import { SquarePen } from 'lucide-react';
import NavbarLinks from './NavbarLinks';

function Navbar() {

    return (
        <nav className={styles.container}>
            <Link href="/">
                <SquarePen size={30} />
            </Link>

            <div className={styles.navRight}>

                {/* max-width: 640px */}
                <div className={styles.hamburger}>
                    <Hamburger />
                </div>

                <ul className={styles.navLinks}>
                    <NavbarLinks />
                </ul>
                <ToggleContainer />
            </div>

        </nav>
    );
}

export default Navbar;
