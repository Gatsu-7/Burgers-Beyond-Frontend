import React, { useState } from "react";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { Link } from "react-router-dom";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState({
    1: 0,
    2: 0,
    3: 0,
  });

  const increment = (item) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [item]: prevItems[item] + 1,
    }));
  };

  const decrement = (item) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [item]: prevItems[item] > 0 ? prevItems[item] - 1 : 0,
    }));
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={cartItems[1]}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />

        <CartItem
          title={"Cheese Burger with Double Patty"}
          img={burger2}
          value={cartItems[2]}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger with medium Fries"}
          img={burger3}
          value={cartItems[3]}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>
          <div>
            <h4> Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
