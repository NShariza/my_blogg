import React from 'react';
import {iphones} from '../../constants/iphones';
import { NavLink } from 'react-router-dom';
import styles from './Iphones.module.css';

const Iphones = () => {
  return(
    <div className={styles.container}>
      <h3>iPhone</h3>
      <div className={styles.iphone_cards}>
        {iphones.map(item => <div>
            <NavLink to={`/product/${item.id}`}>
              <img src={item.img} alt=""/>
            </NavLink>
            <p>{item.name}</p>
            <p className={styles.price}>{item.price}</p>
            <p className={styles.dollar}>{item.dollar}</p>
            <NavLink to={`/product/${item.id}`} className={styles.choose}>
              выбрать
            </NavLink>
        </div>)}
      </div>
    </div>
  );
};

export default Iphones;