import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

type CheckoutFormProps = { singleItem?: any; id: any };

const CheckoutForm: React.FC<CheckoutFormProps> = ({ singleItem, id }) => {
  const [user, loading] = useAuthState(auth);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [transactionId, setTransactionId] = useState("");
  const { price, _id, title, description, image } = singleItem;
  const paid = true;
  const navigate = useNavigate();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://creative-agancy-server.vercel.app/api/v1/create-payment-intent",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card: any = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    setSuccess("");

    // confirm payment class
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "Jenny Rosen",
            email: "hasan@gmail.com",
          },
        },
      });

    if (intentError) {
      setCardError(error?.message || "");
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);

      // payment server request

      const paymentData = {
        paymentId: paymentIntent.id,
        orderId: _id,
        email: user?.email,
        title: title,
        image: image,
        price: price,
        description: description,
        paid: paid,
      };

      const url = `https://creative-agancy-server.vercel.app/api/v1/order`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })
        .then((res) => res.json())
        .then((payment) => {
          // setSuccess(`${payment} congrats! Your payment is completed`);
          toast.success(`${payment} congrats! Your payment is completed`);
          navigate("/");
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="mt-[20px] hover:shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  rounded-[5px] mr-[10px] xss:text-center xss:px-[15px] md:px-[47px] py-[10px] text-white bg-primary  hover:bg-secondary"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay now
        </button>
      </form>
      <div className="mt-[15px]">
        {cardError && <p className="text-red-500">{cardError}</p>}
        {success && (
          <div className="text-green-500">
            <p>{success}</p>
            <p>
              Your Transaction Id:
              <span className="text-orange-500"> {transactionId}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default CheckoutForm;
