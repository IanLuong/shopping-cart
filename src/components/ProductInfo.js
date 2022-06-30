import { useState } from "react"
import { useParams } from "react-router-dom"
import recordData from "../recordData"

export default function ProductInfo(props) {
    const { productId } = useParams()
    const product = recordData.find(product => product.id === parseInt(productId))

    const [showTracklist, setShowTracklist] = useState(false)
    const [quantity, setQuantity] = useState(1)

    function handleChange(event) {
        const { value } = event.target
        if (value > 0) {
            setQuantity(value)
        }
    }

    return (
        <div class="product-info-container">

            <div className="product-info">
                <div>
                    <img className="products-item-image" src={product.image} />
                </div>
                <div>
                    <div>
                        <h3 className="products-item-text title">{product.title}</h3>
                        <h4 className="products-item-text artist">{product.artist}</h4>
                        <p className="products-item-price">£{product.price}</p>
                    </div>
                </div>
                <div className="products-add">
                    <div class="products-quantity-buttons">
                        <button className="cart-button cart-button-left" onClick={() => setQuantity(quantity => quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <input className="quantity" type="number" value={quantity} onChange={handleChange} min={1} />
                        <button className="cart-button" onClick={() => setQuantity(quantity => quantity + 1)}>+</button>
                    </div>
                    <button className="add-cart-button" onClick={() => props.addToCart(product, quantity, true)}>Add to Cart</button>
                </div>
                {/* TODO: Add event listener to button below */}
                {product.tracklist && <button className="show-tracklist-button">Show Tracklist</button>}
                <p className="products-item-description">{product.description.replace("\n", "<bo>")}</p>
            </div>
        </div>
    )
}