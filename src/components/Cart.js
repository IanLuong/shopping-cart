import CartItem from "./CartItem"

export default function Cart(props) {
    const { cart } = props
    const mappedCart = cart.map(item => <CartItem item={item} addToCart={props.addToCart} removeFromCart={props.removeFromCart}/>)

    return (
        <div className="cart">
            {cart.length === 0 ?
                <>
                    <h1 className="cart-empty-message">😔 You don't have any items in your cart 😔</h1>
                    <h4>Get some here pls</h4>
                </> :
                mappedCart}
        </div>
    )
}