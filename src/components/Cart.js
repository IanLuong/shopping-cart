import { Link } from "react-router-dom"
import CartItem from "./CartItem"

export default function Cart(props) {
    const { cart, cartTotal } = props

    const mappedCart = cart.map(item => <CartItem item={item} addToCart={props.addToCart} removeFromCart={props.removeFromCart} removeItemFromCart={props.removeItemFromCart} />)

    return (
        <div className="cart">
            {cart.length === 0 ?
                <>
                    <h1 className="cart-empty-message">😔 You don't have any items in your cart 😔</h1>
                    <Link to="/products">
                        <button className="cart-empty-button">Get some here pls</button>
                    </Link>
                </> :
                <>
                    {mappedCart}
                    <div className="cart-total">
                        <p className="cart-total-text">Total</p>
                        <h4 className="cart-total-value">£{cartTotal}</h4>
                    </div>
                    <div className="cart-buttons">
                        <button className="clear-button" onClick={props.clearCart}>Clear Cart</button>
                        <Link to="/products">
                            <button className="continue-button">Continue Shopping</button>
                        </Link>
                        <button className="checkout-button">Checkout</button>
                    </div>
                </>}
        </div>
    )
}