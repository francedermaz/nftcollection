import styles from './CollectionCard.module.css';
import eth from './assets/weth.png';

const CollectionCard = ({id,name,traits,image}) => {
    return(
        <div className={styles.card}>
            <img className={styles.img} src={image} alt="cardimage"/>
            <div className={styles.namecont}>
                <h2>{name}</h2>
            </div>
            <div className={styles.idcont}>
                <p>-#{id}</p>
            </div>
            <div className={styles.pricecont}>
                <img className={styles.eth} src={eth} alt="eth"/>
                <p>{traits[0]?.value}</p>
            </div>
        </div>
    )
}

export default CollectionCard;