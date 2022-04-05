import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import styles from './Landing.module.css';

const Landing = () => {
    return(
        <div>
            <NavBar/>
            <div className={styles.page}>
                <div className={styles.imgdiv}>
                    
                </div>
                <div className={styles.textland}>
                    <h1 className={styles.titleone}>Extraordinary</h1>
                    <div>
                        <h1 className={styles.nft}>NFT</h1>
                        <h1 className={styles.titleone}>you'll love</h1>
                        <p className={styles.text}>I believe you have a unique taste, discover the</p>
                        <p className={styles.text}>endless possibilities of the NFT world</p>
                    </div>
                    <Link to={'/home'}>
                        <button className={styles.button}>Explore now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;