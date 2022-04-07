import CollectionCard from '../CollectionCard/CollectionCard';
import NavBar from '../NavBar/NavBar';
import styles from './Explore.module.css';

const Explore = () => {
    return(
        <div>
            <NavBar/>
            <CollectionCard id={0} name={"King Bob"} traits={[{'value':7}]} image="https://lh3.googleusercontent.com/03tWOlxtz0YLhBdv8jehfUwpeYQVmN5pYMVmIcDtMHm7NqW2_vHNH08RoQBsoEM4NXDfA59EhO5zTC6VUlv9a2ENa-AYDJQpFEKsmA=w224"/>
        </div>
    )
}

export default Explore;