import ImageOne from "../img/julio-rionaldo-C0oRQ_8SxBY-unsplash.jpg"
import ImageTwo from "../img/karl-hornfeldt-L5gqyA9NLAM-unsplash.jpg"
import ImageThree from "../img/mitchel-lensink-HPITX4JuuSo-unsplash.jpg"
import { useEffect, useState } from "react"

export default function Home() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const homeScreens = [
        {
            text: "Music on a plate never tasted this good...",
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
        console.log(currentSlide)
        console.log(homeScreens)
        setTimeout(() => {
            setCurrentSlide(slide => ((slide + 1) % 3))
        }, 5000)
    }, [currentSlide])

    return (
        <div className="carousel">
            <div className="carousel-item">
                <h1 className="carousel-text">{homeScreens[currentSlide].text}</h1>
                <img src={homeScreens[currentSlide].image} alt=""/>
            </div>

            <div className="carousel-actions">
                <button id="carousel-button-prev" aria-label="Previous Slidex">{'<'}</button>
                <button id="carousel-button-next" aria-label="Next Slide">{'>'}</button>
            </div>
        </div>
    )
}