import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelect from "../../../hooks/useSelect";
import CheckoutForm from "./Forms/CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [select] = useSelect();
    const total = select.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm select={select} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;