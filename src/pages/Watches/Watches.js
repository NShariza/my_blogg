import React from 'react';
import {watches} from '../../constants/iphones';
import { NavLink } from 'react-router-dom';
import styles from './Watches.module.css';

const Watches = () => {
  return(
    <div className={styles.container}>
      <h3>Watch</h3>
      <div className={styles.watch_cards}>
        {watches.map(item => <div>
            <div className={styles.boxes}>
            <NavLink to={`/product/${item.id}`}>
              <img src={item.img} alt=""/>
            </NavLink>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.price}>{item.price}</p>
            <p className={styles.dollar}>{item.dollar}</p>
            <NavLink to={`/product/${item.id}`} className={styles.choose}>
              выбрать
            </NavLink>
            </div>
        </div>)}
      </div>
    </div>
  );
};

export default Watches;