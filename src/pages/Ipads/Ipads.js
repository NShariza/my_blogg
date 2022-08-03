import React from 'react';
import {ipads} from '../../constants/iphones';
import { NavLink } from 'react-router-dom';
import styles from './Ipads.module.css';

const Ipads = () => {
  return(
    <div className={styles.container}>
      <h3>iPad</h3>
      <div className={styles.ipad_cards}>
        {ipads.map(item => <div>
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

export default Ipads;