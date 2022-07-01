import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function ProductsItem(props) {
    const { id, title, artist, price, image } = props.record
    const [quantity, setQuantity] = useState(1)

    function handleChange(event) {
        const { value } = event.target
        if (value > 0) {
            setQuantity(value)
        }
    }

    return (
        <Link to={`/products/${id}`} className="product-link">
            <div className="products-item" onClick={() => console.log("clicked")}>
                <h3 className="products-item-text title">{title}</h3>
                <h4 className="products-item-text artist">{artist}</h4>
                <div className="pricing">
                    <p className="products-item-price">£{price}</p>
                    <div className="products-add">
                        <div className="products-quantity-buttons">
                            <button className="cart-button" onClick={function (e) { e.preventDefault(); setQuantity(quantity => quantity > 1 ? quantity - 1 : 1) }}>-</button>
                            <input className="quantity" type="number" value={quantity} onChange={handleChange} onClick={e => e.preventDefault()}/>
                            <button className="cart-button" onClick={function (e) { e.preventDefault(); setQuantity(quantity => parseInt(quantity) + 1)}}>+</button>
                        </div>
                        <button className="add-cart-button" onClick={function (e) { e.preventDefault(); props.addToCart(props.record, quantity, true)}}>Add to Cart</button>
                    </div>
                </div>

                <img className="products-item-image" src={image} alt="" />
            </div>
        </Link>
    )
}