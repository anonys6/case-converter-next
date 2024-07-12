import Link from 'next/link';
import React from 'react'

function NavbarLinks() {
    return (
        <>
            <li><Link href="/lower-case">lower case</Link></li>
            <li><Link href="/upper-case">UPPER CASE</Link></li>
            <li><Link href="/camel-case">camelCase</Link></li>
            <li><Link href="/kebab-case">kebab-case</Link></li>
            <li><Link href="/pascal-case">PascalCase</Link></li>
            <li><Link href="/title-case">Title Case</Link></li>
            <li><Link href="/italic-text"><em>Italic text</em></Link></li>
            <li><Link href="/unicode-text">Unicode text</Link></li>

            {/* <li><Link className={styles.advancedLink} href="https://www.advancedtexteditor.com/" target='_blank'>Advanced Text Editor<ArrowUpRight /></Link></li> */}
        </>
    )
}

export default NavbarLinks