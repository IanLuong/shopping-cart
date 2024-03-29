import { Link, Route, Routes } from "react-router-dom"
import "./style.css"
import cartImage from "./img/shopping-cart-outline-svgrepo-com.svg"
import Home from "./components/Home"
import Products from "./components/Products"
import ProductInfo from "./components/ProductInfo"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export default function App() {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const stringifiedCart = JSON.stringify(cart)
        localStorage.setItem("cart", stringifiedCart)
        setCartTotal(cart.reduce((total, cur) => total + (cur.count * cur.price), 0).toFixed(2))
    }, [cart])

    function addToCart(record, quantity = 1, displayToast = false) {
        const recordAlreadyInCart = cart.filter(item => item.id === record.id).length > 0

        if (recordAlreadyInCart) {
            const recordIndex = cart.findIndex(item => item.id === record.id)
            let currentCart = [...cart]
            let updatedItem = {
                ...currentCart[recordIndex],
                count: parseInt(currentCart[recordIndex].count) + parseInt(quantity)
            }
            currentCart[recordIndex] = updatedItem
            setCart(currentCart)

        } else {
            setCart(prevCart => [...prevCart, {
                ...record,
                count: parseInt(quantity)
            }])
        }

        if (displayToast) {
            toast.success(`Added ${quantity} "${record.title}" to cart!`, { theme: "dark" })
        }
    }

    //decrements the count for an item
    function removeFromCart(record) {
        const recordIndex = cart.findIndex(item => item.id === record.id)
        if (cart[recordIndex].count === 1) {
            setCart(prevCart => prevCart.filter(item => item.id !== record.id))
        } else {
            let currentCart = [...cart]
            let updatedItem = {
                ...currentCart[recordIndex],
                count: currentCart[recordIndex].count - 1
            }
            currentCart[recordIndex] = updatedItem
            setCart(currentCart)
        }
    }

    //Removes item (used in the cart page) 
    function removeItemFromCart(record) {
        setCart(prevCart => prevCart.filter(item => item.id !== record.id))
    }

    function clearCart() {
        setCart([])
    }

    return (
        <>
            <nav>
                <Link to="/" className="logo"><h1>Spoofy Records®</h1></Link>
                <div className="right-nav">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/products" className="link">Products</Link>
                    <Link to="/contact" className="link">Contact</Link>
                    <Link to="/cart" className="link link-cart">
                        <img id="cart-image" src={cartImage} alt="Cart" />
                        {cart.length > 0 && <span className="badge">{cart.reduce((total, cur) => total + cur.count, 0)}</span>}
                    </Link>
                </div>
            </nav>
            <section className="notice">
                <h4>RECORD STORE DAY: <Link to="/products">RSD stock available to purchase online here</Link></h4>
            </section>

            <div className="container">
                <main>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/products" element={<Products addToCart={addToCart} />}></Route>
                        <Route path="/products/:productId" element={<ProductInfo addToCart={addToCart}/>}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} removeItemFromCart={removeItemFromCart} cartTotal={cartTotal} clearCart={clearCart} />}></Route>
                    </Routes>
                </main>
            </div>
            <footer>
                <p>Copyright © 2022 Ian Luong</p>
            </footer>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={true}
            />
        </>
    )
}