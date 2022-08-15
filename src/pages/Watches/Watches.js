import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Watches.module.css';

const Watches = () => {

  const [watches, setWatches] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/watches")
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else{
          alert('Error. Error: ' + response.status);
        }
      })
      .then(data => setWatches(data))
  }, [])

  return(
    <div className={styles.container}>
      <h3>Watch</h3>
      <div className={styles.watch_cards}>
        {watches.map(item => <div key={item.id}>
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