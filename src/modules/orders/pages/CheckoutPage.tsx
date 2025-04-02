/*import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('TU_CLAVE_PUBLICA_DE_STRIPE');

function CheckoutForm() {
    const { cart, clearCart } = useCart();
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const { data: clientSecret } = await axios.post('http://localhost:5000/api/payment', { cart });

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: { card: elements.getElement(CardElement)!, billing_details: { name: 'Cliente' } },
        });

        if (result.paymentIntent?.status === 'succeeded') {
            alert('Pago realizado con éxito');
            clearCart();
        } else {
            alert('Error en el pago');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>Pagar</button>
        </form>
    );
}

function CheckoutPage() {
    return (
        <Elements stripe={stripePromise}>
            <h2>Proceso de Pago</h2>
            <CheckoutForm />
        </Elements>
    );
}

export default CheckoutPage;*/