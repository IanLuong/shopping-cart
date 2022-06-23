import ImageOne from "../img/julio-rionaldo-C0oRQ_8SxBY-unsplash.jpg"
import ImageTwo from "../img/karl-hornfeldt-L5gqyA9NLAM-unsplash.png"
import ImageThree from "../img/mitchel-lensink-HPITX4JuuSo-unsplash.png"
import React, { useEffect, useState } from "react"

export default function Home() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const homeScreens = [
        {
            text: "Buy some sound on a plate.",
            image: ImageOne
        },
        {
            text: "Music make you lose control.",
            image: ImageTwo
        },
        {
            text: "When words fail, music speaks.",
            image: ImageThree
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            setCurrentSlide(slide => ((slide + 1) % 3))
        }, 5000)
    }, [currentSlide])
    
    return (
        <div className="carousel">
            <div className={`carousel-item ${currentSlide !== 0 ? "hidden" : ""}`}>
                <h1 className="carousel-text">{homeScreens[0].text}</h1>
                <img src={homeScreens[0].image} alt="" />
            </div>

            <div className={`carousel-item ${currentSlide !== 1 ? "hidden" : ""}`}>
                <h1 className="carousel-text">{homeScreens[1].text}</h1>
                <img src={homeScreens[1].image} alt="" />
            </div>

            <div className={`carousel-item ${currentSlide !== 2 ? "hidden" : ""}`}>
                <h1 className="carousel-text">{homeScreens[2].text}</h1>
                <img src={homeScreens[2].image} alt="" />
            </div>

            {/* <div className="carousel-actions">
                 <button id="carousel-button-prev" aria-label="Previous Slidex">{'<'}</button>
                 <button id="carousel-button-next" aria-label="Next Slide">{'>'}</button>
             </div> */}
        </div>
    )
}