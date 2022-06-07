import { Link, Route, Routes } from "react-router-dom"
import "./style.css"
import cartImage from "./img/shopping-cart-outline-svgrepo-com.svg"
import Home from "./components/Home"
import Products from "./components/Products"
import Contact from "./components/Contact"
import Cart from "./components/Cart"



export default function App() {
    return (
        <>
            <nav>
                <Link to="/" className="logo"><h1>Spoofy Records®</h1></Link>
                <div className="right-nav">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/products" className="link">Products</Link>
                    <Link to="/contact" className="link">Contact</Link>
                    |
                    <Link to="/cart" className="link"><img src={cartImage} alt="Cart"/></Link>
                </div>
            </nav>
            <section className="notice">
                <h4>RECORD STORE DAY: <Link to="/products">RSD stock available to purchase online here</Link></h4>
            </section>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>

            <footer>
                <p>Copyright © 2022 Ian Luong</p>
            </footer>
        </>
    )
}