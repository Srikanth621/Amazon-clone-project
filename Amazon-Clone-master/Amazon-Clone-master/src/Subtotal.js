import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { selectBasket } from "./features/amazon/basketSlice";
import { getBasketTotal } from "./utilityFunctions";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const { basket } = useSelector(selectBasket);

  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button
        onClick={(e) => history.push("/payment")}
        disabled={basket?.length === 0 && true}
      >
        Procedd to checkout
      </button>
      {basket?.length === 0 && (
        <h1 style={{ fontSize: "15px", color: "red", paddingTop: "2px" }}>
          Please, add the items to basket and proceed
        </h1>
      )}
    </div>
  );
}

export default Subtotal;
