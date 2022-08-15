import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Ipads.module.css';

const Ipads = () => {


  const [ipads, setIpads] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/ipads")
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else{
          alert('Error. Error: ' + response.status);
        }
      })
      .then(data => setIpads(data))
  }, [])

  return(
    <div className={styles.container}>
      <h3>iPad</h3>
      <div className={styles.ipad_cards}>
        {ipads.map(item => <div key={item.id}>
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