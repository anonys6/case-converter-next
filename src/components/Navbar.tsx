import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import ToggleContainer from './ToggleContainer';
import Hamburger from './Hamburger';

function Navbar() {

    return (
        <nav className={styles.container}>
            <Link href="/">
                <h1>Logo</h1>
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
                </ul>
                <ToggleContainer />
            </div>

        </nav>
    );
}

export default Navbar;
