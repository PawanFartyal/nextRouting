import styles from '@/styles/navbar.module.css'
import Link from 'next/link'
export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.linkContainer}>
                <li>
                    <Link href="/" >Home</Link>
                </li>
                <li>
                    <Link href="/about" >About</Link>
                </li>
                <li>
                    <Link href="/contact" >Contact</Link>
                </li>
            </ul>
        </div>
    )
}