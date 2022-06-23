import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import Confetti from "react-confetti"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"


export default function Cart(props) {
    const { cart, cartTotal } = props
    const mappedCart = cart.map(item => <CartItem item={item} addToCart={props.addToCart} removeFromCart={props.removeFromCart} removeItemFromCart={props.removeItemFromCart} />)

    const [checkedOut, setCheckedOut] = useState(false)

    function handleCheckout() {
        setCheckedOut(true)
        toast.dark("WE'RE RICH, WE'RE RICH, WE'RE RICH, WE'RE RICH, WE'RE RICH")
    }


    return (
        <div className="cart">

            {cart.length === 0 ?
                <>
                    <h1 className="cart-empty-message">😔 You don't have any items in your cart 😔</h1>
                    <Link to="/products">
                        <button className="cart-button">Get some here pls</button>
                    </Link>
                </> :
                <>
                    {mappedCart}
                    <div className="cart-total">
                        <p className="cart-total-text">Total</p>
                        <h4 className="cart-total-value">£{cartTotal}</h4>
                    </div>
                    <div className="cart-buttons">
                        <button className="cart-button clear" onClick={props.clearCart}>Clear Cart</button>
                        <Link to="/products">
                            <button className="cart-button continue">Continue Shopping</button>
                        </Link>
                        <button className="cart-button checkout" onClick={handleCheckout}>Checkout</button>
                    </div>
                    {checkedOut && <Confetti />}
                    <ToastContainer
                        position="bottom-center"
                        autoClose={2000}
                        hideProgressBar={true}
                    />
                </>}
        </div>
    )
}