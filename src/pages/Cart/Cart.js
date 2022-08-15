import React, {useState, useEffect} from "react";
import s from './Cart.module.css';

const Cart = () => {
  const [goods, setGoods] = useState([]);

  const getProducts = () => {
    const goods = JSON.parse(localStorage.getItem('cart'));
    setGoods(Object.values(goods));
  }

  const changeCount = (e, data) => {
    const goods = JSON.parse(localStorage.getItem('cart'));
    goods[data.id].count = +e.currentTarget.value;
    localStorage.setItem('cart', JSON.stringify(goods));
    getProducts();
  }

  useEffect(getProducts, []);


  return(
    <div className={s.container}>
      <h1>Корзина</h1>
      <table className={s.table}>
        {
          goods.map(item => {
            return(
              <tr>
                <td><img src={item.img} alt="" /></td>
                <td>{item.name}</td>
                <td>{item.price} {item.currency}</td>
                <td><input onChange={e => changeCount(e, item)} type="number" defaultValue={item.count} /></td>
                <td>{item.count * item.price} {item.currency}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default Cart;