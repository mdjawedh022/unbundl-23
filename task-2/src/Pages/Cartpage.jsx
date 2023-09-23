import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Cart.css";

export default function Cartpage() {
  const [Carddata, setCardData] = useState([]);
  const [newTotal, setNewTotal] = useState(0);
  useEffect(() => {
    axios
      .get(`https://chocolates-8z1x.onrender.com/cart`)
      .then(({ data }) => {
        setCardData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handledelete = (id) => {
    axios
      .delete(`https://chocolates-8z1x.onrender.com/cart/${id}`)
      .then(() => {
        // If the delete operation is successful, fetch the updated data
        axios
          .get(`https://chocolates-8z1x.onrender.com/cart`)
          .then(({ data }) => {
            setCardData(data);
            console.log(data);
            const total = data.reduce((total, item) => total + item.price, 0);
            setNewTotal(total);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleIncrement = (id) => {
    const updatedCardData = Carddata.map((elem) => {
      if (elem.id === id) {
        const updatedQty = elem.qty < 8 ? elem.qty + 1 : 8; // Limit to a maximum of 8
        const updatedPrice = elem.price * updatedQty;
        return { ...elem, qty: updatedQty, price: updatedPrice };
      }
      return elem;
    });

    setCardData(updatedCardData);
    const total = updatedCardData.reduce(
      (total, item) => total + item.price,
      0
    );
    setNewTotal(total);
  };

  const handleDecrement = (id) => {
    const updatedCardData = Carddata.map((elem) => {
      if (elem.id === id && elem.qty > 1) {
        const updatedQty = elem.qty - 1;
        const updatedPrice = (elem.price / elem.qty) * updatedQty; // Update the price
        return { ...elem, qty: updatedQty, price: updatedPrice };
      }
      return elem;
    });

    setCardData(updatedCardData);

    // Calculate the new total
    const total = updatedCardData.reduce(
      (total, item) => total + item.price,
      0
    );
    setNewTotal(total);
  };

  return (
    <div className="cart-section">
      <h1>Total price:- {newTotal}</h1>
      <div className="cartpage">
        {Carddata.map((elem) => {
          return (
            <div key={elem.id} className="cart-page">
             <div className="cart-img">
             <img src={elem.image} alt="fdgsf" />
             </div>
              <p>{elem.name}</p>
              <p>${elem.price.toFixed(2)}</p>
             <div className="qty-cart">
             <button onClick={() => handleIncrement(elem.id)}>+</button>
              <p>{elem.qty}</p>
              <button onClick={() => handleDecrement(elem.id)}>-</button>
             </div>
              <button onClick={() => handledelete(elem.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
