import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "./features/amazon/basketSlice";

function Product({ id, title, rating, image, price }) {
  const dispatch = useDispatch();

  const _addToBasket = () => {
    dispatch(
      addToBasket({
        item: {
          id,
          title,
          image,
          price,
          rating,
        },
      })
    );
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>₹</strong>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>{"⭐".repeat(rating)}</p>
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={_addToBasket}>Addd to Basket</button>
    </div>
  );
}

export default Product;
