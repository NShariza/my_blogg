import React, {useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import s from './Iphone.module.css';

const title = {
  textAlign:"center"
}

const Iphone = () => {
  const [iphones, setIphones] = useState([]);

  const getIphones = () => {
    const url = 'http://localhost:3001/iphones';

    fetch(url)
      .then(response => {
        if (response.status === 200){
            return response.json();
        } else {
            toast.error('Произошла ошибка. Статус ошибки:' + response.status);
        }
      })
      .then(data => setIphones(data))
}

  const getProduct = (data) => {
    const id = data.id;
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    cart[id] = { ...data, count:1 }
      localStorage.setItem('cart', JSON.stringify(cart))
    }

  useEffect(() => {
    getIphones();
  }, [])

  return (
    <div className={s.container}>
      <h3 style={title}>IPhone</h3>
      
      <div className={s.product_container}>
        {
          iphones.map(item => {
            return (
              <div key={item.id} className="product_card">
                <img src={item.img} alt=""/>
                <p>{item.name}</p>
                <p className={s.price}>{item.price} {item.currency}</p>
                <p className={s.dollar}>{item.dollar}</p>
                <button className={s.choose} onClick={() => getProduct(item)}>Купить</button>
              </div>
            )
          })
          }
      </div>
    </div>
  );
};

export default Iphone;