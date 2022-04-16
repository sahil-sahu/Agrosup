import styles from './main.module.css';
import Link from 'next/link'

function Header() {

    return(
        <header>
            <nav className={styles.Nav}>
                <Link href="https://agrosup.ga">
                <a className={styles.brand}>
                    <img src="/favicon.png" alt="" />
                    <h2>AGROSUP</h2>
                </a>
                </Link>
            </nav>
        </header>
    )
    
}

export default Header;