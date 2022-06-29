export default function CartItem(props) {
    const { item } = props

    return (
        <div className="cart-item">
            <img className="cart-item-image" src={item.image} alt="" />
            <div className="cart-item-info">
                <h3 className="cart-item-text title">{item.title}</h3>
                <h3 className="cart-item-text artist">{item.artist}</h3>
            </div>
            <div className="cart-item-pricing">
                <h4 className="cart-item-subtotal">£{(item.count * item.price).toFixed(2)}</h4>
                <div className="cart-item-quantity">
                    <button onClick={() => props.removeFromCart(item)} className="cart-button">-</button>
                    <p className="quantity">{item.count}</p>
                    <button onClick={() => props.addToCart(item)} className="cart-button">+</button>
                </div>
                <p className="cart-item-remove" onClick={() => props.removeItemFromCart(item)}>Remove</p>
            </div>
        </div>
    )
}