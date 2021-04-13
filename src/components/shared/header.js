import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';

const Header = () => {

    const [isToggled, setToggle] = useState(false);

    const toggleClass = isToggled ? styles.nav__body__isToggled : null;
    const btnToggled = isToggled ? styles.nav__toggle__isOpen : null;

    return ( 
        <header className={styles.navbar}>
            <div className={styles.nav__container}>
                <button type="button" className={styles.nav__toggle + ' ' + btnToggled} >
                    <div onClick={() => setToggle(!isToggled)} className={styles.nav__toggle_inner}></div>
                    <svg fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="8" x2="21" y1="12" y2="12"></line><line x1="15" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                </button>
                <div className={styles.nav__branding}>
                    <Link className={styles.title}  to="/">
                        <img className={styles.logo} src="/img/logo-color.png" alt={"Hello"}/>
                    </Link>
                </div>
                <div className={styles.nav__body + ' ' + toggleClass}>
                    <nav className={styles.nav__menu}>
                            <Link className={styles.nav__item} to="/">Inicio</Link>
                            <Link className={styles.nav__item} to="/about">Acerca de mi</Link>
                            <Link className={styles.nav__item} to="/mywork">Mis trabajos</Link>
                            {/* <Link className={styles.nav__item} to="/blog">Blog</Link> */}
                            <Link className={styles.nav__item} to="/toastme">Toastme JS <span role="img" aria-labelledby="notification">📢</span></Link>
                            <Link className={styles.nav__item} to="/contact">Contáctame</Link>
                    </nav>
                </div>
            </div>
        </header>
     );
}
 
export default Header;