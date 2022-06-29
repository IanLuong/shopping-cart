import React, { useState } from "react"

export default function ProductsItem(props) {
    const { title, artist, price, image } = props.record
    const [quantity, setQuantity] = useState(1)

    function handleChange(event) {
        const {value} = event.target
        if(value > 0) {
            setQuantity(value)
        }
    }

    return (
        <div className="products-item">
            <h3 className="products-item-text title">{title}</h3>
            <h4 className="products-item-text artist">{artist}</h4>
            <div className="pricing">
                <p className="products-item-price">£{price}</p>
                <div className="products-add">
                    <div class="products-quantity-buttons">
                        <button className="cart-button" onClick={() => setQuantity(quantity => quantity - 1)}>-</button>
                        <input className="quantity" type="number" value={quantity} onChange={handleChange}/>
                        <button className="cart-button" onClick={() => setQuantity(quantity => quantity + 1)}>+</button>
                    </div>
                    <button className="add-cart-button" onClick={() => props.addToCart(props.record, quantity, true)}>Add to Cart</button>
                </div>
            </div>

            <img className="products-item-image" src={image} alt="" />
        </div>
    )
}