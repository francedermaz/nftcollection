import styles from './CollectionCard.module.css';
import eth from './assets/weth.png';

const CollectionCard = ({id,name,traits,image}) => {
    return(
        <div className={styles.card}>
            <img className={styles.img} src={image} alt="cardimage"/>
            <div className={styles.data}>
                <div className={styles.namecont}>
                    <h3 className={styles.name}>{name}</h3>
                </div>
                <div className={styles.idcont}>
                    <p className={styles.p}>-#{id}</p>
                </div>
                <div className={styles.pricecont}>
                    <img className={styles.eth} src={eth} alt="eth"/>
                    <p className={styles.price}>{traits[0]?.value}</p>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard;