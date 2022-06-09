export default function CartItem(props) {
    const { item } = props

    return (
        <div className="cart-item">
            <img src={item.image} alt="" />
            <div className="cart-item-info">
                <h3>{item.title}</h3>
                <h3>{item.artist}</h3>
            </div>
            <div className="cart-item-quantity">
                <button onClick={() => props.removeFromCart(item)}>-</button>
                <p>{item.count}</p>
                <button onClick={() => props.addToCart(item)}>+</button>
            </div>
            <h4 className="cart-item-subtotal">£{(item.count * item.price).toFixed(2)}</h4>
        </div>
    )
}