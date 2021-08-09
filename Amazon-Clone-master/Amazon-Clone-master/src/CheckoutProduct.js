import React from "react";
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "./features/amazon/basketSlice";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const dispatch = useDispatch();

  const _removeFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>₹</strong> <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <p>{"⭐".repeat(rating)}</p>
        </div>
        {!hideButton && (
          <button onClick={_removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
