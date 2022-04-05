import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import styles from './Home.module.css';

const Home = () => {
    return(
        <div>
            <NavBar/>
            <div className={styles.page}>
                <div className={styles.imgdiv}>
                    
                </div>
                <div className={styles.textland}>
                    <h1 className={styles.titleone}>Four legs are</h1>
                    <h1 className={styles.title}>better than two</h1>
                    <p className={styles.textone}>An animal's eyes have the power</p>
                    <p className={styles.text}>to speak a great language</p>
                    <Link to={'/explore'}>
                        <button className={styles.button}>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;