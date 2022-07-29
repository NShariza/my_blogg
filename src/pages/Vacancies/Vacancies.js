import React from 'react';
import styles from './Vacancies.module.css';

const Vacancies = (props) => {
    return (
    <div className={styles.vacancies}>
        <h1>{props.work}</h1>
    </div>
    );
}

export default Vacancies;