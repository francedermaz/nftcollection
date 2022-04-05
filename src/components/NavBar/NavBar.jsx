import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from './assets/logo.png';

const NavBar = () => {
    return(
        <div>
            <section className={styles.navbar}>
                <div className={styles.link}>
                    <Link to={'/'}>
                        <img className={styles.img} src={logo} alt="logo"/>
                    </Link>
                </div>
                <div className={styles.menu}>
                    <Link to={'/home'}>
                        <h1 className={styles.title}>Home</h1>
                    </Link>
                    <Link to={'/about'}>
                        <h1 className={styles.title}>About</h1>
                    </Link>
                    <div className={styles.div}>
                        <Link to={'/account'}>
                            <button className={styles.button}>Connect</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NavBar;