import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/amazon/userSlice";
import { selectBasket, emptyBasket } from "./features/amazon/basketSlice";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { getBasketTotal } from "./utilityFunctions";
import axios from "./axios";
import db from "./firebase";

function Payment() {
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  const { user: userDetails } = useSelector(selectUser);
  const user = userDetails?.user;
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const { basket } = useSelector(selectBasket);

  const totalAmount = getBasketTotal(basket);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setProcessing(false);
        setError(null);
        dispatch(emptyBasket());
        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3 className="payment__titleLocation">
              <LocationOnIcon />
              Delivery Address
            </h3>
          </div>
          <div className="payment__address">
            <p>{user.email}</p>
            <p>Beechuvaripalli(V), Khajipet(M), Kadapa(D)</p>
            <p>Andhrapradesh</p>
            <p>pincode - 516203</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {totalAmount > 0 && (
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={totalAmount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error && (
                  <div style={{ color: "red", padding: "20px" }}>{error}</div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
