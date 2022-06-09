import React from "react"

export default function ProductsItem(props) {
    const { title, artist, price, image } = props.record

    return (
        <div className="products-item">
            <h3 className="products-item-title">{title}</h3>
            <h4 className="products-item-artist">{artist}</h4>
            <div className="pricing">
                <button className="add-cart-button" onClick={() => props.addToCart(props.record)}>Add to Cart</button>
                <p className="products-item-price">£{price}</p>
            </div>

            <img className="products-item-image" src={image} alt="" />
        </div>
    )
}