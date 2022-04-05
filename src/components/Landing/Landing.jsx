import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import styles from './Landing.module.css';
import statue from './assets/statue.png';

const Landing = () => {
    return(
        <div>
            <NavBar/>
            <div className={styles.page}>
                <div className={styles.textland}>
                    <h1 className={styles.titleone}>Extraordinary</h1>
                    <div className={styles.divnftlove}>
                        <h1 className={styles.nft}>NFT</h1><pre>  </pre>
                        <h1 className={styles.titleone}>you'll love</h1>
                    </div>
                    <p className={styles.text}>I believe you have a unique taste, discover the</p>
                    <p className={styles.text}>endless possibilities of the NFT world</p>
                    <Link to={'/home'}>
                        <button className={styles.button}>Explore now</button>
                    </Link>
                </div>
                <div className={styles.imgdiv}>
                    <img className={styles.img} src={statue} alt="mainimg"/>
                </div>
            </div>
        </div>
    )
}

export default Landing;