import React from 'react';
import styles from './Catalog.module.css';
import { NavLink } from 'react-router-dom';

const title = {
  textAlign:"center"
}

const Catalog = () => {
  return (
    <>
      <h1 style={title}>Catalog</h1>
      <div className={styles.container}>
        <div className={styles.catalog_card}>
          <NavLink to="/catalog/iphone">
            <img src="https://istore.kg/media/category/iphones.webp" alt="" />
            <h2>IPhone</h2>
          </NavLink> 
        </div>
        <div className={styles.catalog_card}>
          <NavLink to="/catalog/ipads">
            <img src="https://istore.kg/media/category/ipads.webp" alt="" />
            <h2>IPad</h2>
          </NavLink>
        </div>
        <div className={styles.catalog_card}>
          <NavLink to="/catalog/watches">
            <img src="https://istore.kg/media/category/watches.webp" alt="" />
            <h2>Watch</h2>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Catalog;