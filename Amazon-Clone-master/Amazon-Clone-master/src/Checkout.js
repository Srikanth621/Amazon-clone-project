import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import { selectBasket } from "./features/amazon/basketSlice";
import CheckoutProduct from "./CheckoutProduct";
import { selectUser } from "./features/amazon/userSlice";


function Checkout() {
  const { basket } = useSelector(selectBasket);

  const user = useSelector(selectUser);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Jupiter/Headers/P2/CUTT_1500x300_50366baa-9592-42f6-b3ab-e57e51455e84.png"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
