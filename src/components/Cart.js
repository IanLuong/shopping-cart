import { useState } from "react"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"

export default function Cart(props) {
    const { cart, cartTotal } = props

    const mappedCart = cart.map(item => <CartItem item={item} addToCart={props.addToCart} removeFromCart={props.removeFromCart} />)

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
                    <div class="cart-total">
                        <p className="cart-total-text">Total</p>
                        <h4 className="cart-total-value">£{cartTotal}</h4>
                    </div>
                    <div class="cart-buttons">
                        <Link to="/products">
                            <button>Continue Shopping</button>
                        </Link>
                        <button class="checkout-button">Checkout</button>
                    </div>
                </>}
        </div>
    )
}