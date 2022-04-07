import { useEffect, useState } from 'react';
import CollectionCard from '../CollectionCard/CollectionCard';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import styles from './Explore.module.css';
import BobList from '../BobList/BobList';

const Explore = () => {
    const [nfts,setNfts] = useState([]);
    useEffect(()=>{
        axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xd1075b5F8045b13b4afaA091A0856Af9B0C9B11A')
        .then((res)=>{
            setNfts(res.data.assets);
        })
    },[])

    return(
        <div>
            <NavBar/>
            <BobList nfts={nfts}/>
        </div>
    )
}

export default Explore;