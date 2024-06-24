import React from 'react'
import './Slider.css'
import products from '../../data'
import { Link } from 'react-router-dom'; 
function Slider() {
    const randomProducts = Array.from({ length: 3 }, () => products[Math.floor(Math.random() * products.length)]);

    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide carousel-home">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                {randomProducts.map((product, index) => (
                    <Link div key={index} className={`carousel-item position-relative ${index === 0 ? 'active' : ''}`} data-bs-interval={index === 0 ? 10000 : 2000} to={`/product/${product.id}`}>
                        <img  src={product.image} className='pro-image position-absolute' alt=''/>
                        <div className="carousel-caption d-md-block">
                            <h3 className='animate__animated animate__fadeInRight text-center caption-1'>{product.title}</h3>
                            <p className='animate__animated animate__fadeInDown'>PRICE : <strong>{product.price} </strong></p>
                            <p className='animate__animated animate__fadeInUp'>RATING :<strong>{product.ratting.rate}</strong></p>
                        </div>
                    </Link>
                ))}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider