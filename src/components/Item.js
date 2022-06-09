import React from "react"

export default function Item(props) {
    const { title, artist, price, image } = props.record

    return (
        <div className="item">
            <h3 className="item-title">{title}</h3>
            <h4 className="item-artist">{artist}</h4>
            <div class="pricing">
                <button className="add-cart-button" onClick={() => props.addToCart(props.record)}>Add to Cart</button>
                <p className="item-price">£{price}</p>
            </div>

            <img className="item-image" src={image} alt="" />
        </div>
    )
}