import React from 'react';
import styles from './Support.module.css';

const Support = (props) => {
    return (
    <div className={styles.support}>
        <h1>{props.sup}</h1>
    </div>
    );
}

export default Support;