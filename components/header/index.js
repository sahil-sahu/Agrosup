import styles from './main.module.css';

function Header() {

    return(
        <header>
            <nav className={styles.Nav}>
                <a className={styles.brand} href="#">
                    <img src="/favicon.png" alt="" />
                    <h2>AGROSUP</h2>
                </a>
                <ul className={styles.navitems}>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">PEOPLE</a></li>
                    <li><a href="">CONTACT</a></li>
                    <li className={styles.start}><a href="#">GET <br /> STARTED</a></li>
                </ul>
                <div className={`${styles.three} ${styles.col}`}>
                    <div className={styles.hamburger} id="hamburger-6">
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    </div>
                </div>
            </nav>
        </header>
    )
    
}

export default Header;