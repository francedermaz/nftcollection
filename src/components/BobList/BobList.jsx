import CollectionCard from '../CollectionCard/CollectionCard';
import styles from './BobList.module.css';

const BobList = ({nfts}) => {
    return(
        <div className={styles.list}>
            {
                nfts.map(el=>{
                    return <CollectionCard 
                    key={el.token_id}
                    id={el.token_id}
                    name={el.name}
                    traits={el.traits}
                    image={el.image_url}/>
                })
            }
        </div>
    )
}

export default BobList;