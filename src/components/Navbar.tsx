import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import ToggleContainer from './ToggleContainer';
import Hamburger from './Hamburger';
import { ArrowUpRight, SquarePen } from 'lucide-react';

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
                    <li><Link href="/camel-case">camelCase</Link></li>
                    <li><Link href="/kebab-case">kebab-case</Link></li>
                    <li><Link href="/pascal-case">PascalCase</Link></li>
                    <li><Link className={styles.advancedLink} href="https://www.advancedtexteditor.com/" target='_blank'>Advanced Text Editor<ArrowUpRight /></Link></li>

                </ul>
                <ToggleContainer />
            </div>

        </nav>
    );
}

export default Navbar;
