import React from 'react';
import styles from './Adress.module.css';

const Adress = (props) => {
    return (
        <div className={styles.adress}>
            <h1>{props.adress}</h1>
        </div>
    );
}

export default Adress;