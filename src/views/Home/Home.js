import React from 'react'
import './Home.css'
import Prodata from './../../data';
import Products from '../../components/Products/Products';
import Slider from '../../components/Slider/Slider';
function Home() {
    return (
        <>
           <Slider/>
            <h1 className='text-center products mt-5 text-white '>Today's Best Deals</h1>
            <div className='container'>

                {Prodata.map((proObject, i) => {
                    const {
                        id,
                        title,
                        image,
                        description,
                        category,
                        ratting,
                        price,
                    } = proObject

                    return (
                        <>
                            <Products
                                id={id}
                                key={i}
                                title={title}
                                image={image}
                                description={description}
                                category={category}
                                rating={ratting}
                                price={price}
                            />

                        </>
                    )
                })
                }
        </div>
        </>
    )
}

export default Home