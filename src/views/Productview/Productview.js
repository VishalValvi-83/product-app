import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data'
import FacebookIcon from './Icons/facebook.png'
import TwitterIcon from './Icons/twitter.png'
import LinkedInIcon from './Icons/LinkedIn.png';
import "./Productview.css"
function Productview() {
  const { id } = useParams()
  const product = products.find((proObject) => proObject.id === id)
  console.log(product)
  return (

    <div className="blog-detailed-Container container">
      <div className="blog-header d-flex  align-items-center my-5">
        <div className="share-n-tag-wrap border w-50 border-dark-subtle">
          <figure className="blog-img">
            <img src={product.image} className='img-fluid' alt={product.title} />
          </figure>
        </div>
        <div className="title-area mx-5 p-5">
          <h1>{product.title}</h1>
          <p className='text'>{product.description}</p>
          <div className='fw-medium fs-5'>PRICE :<strong className='product-price fs-3'> {product.price} </strong></div>
          <div className="product-meta d-inline fw-bold">
            <span className="text-danger  me-2">Rating: {product.ratting.rate}  </span>   |  <span className="text-success ">   Reviews: {product.ratting.count}</span>
          </div>
        </div>

      </div>

      <div className='d-flex w-100 justify-content-between'>
      <div className="bottom-share-wrap">
          <strong> Share : </strong>
          <ul className="bottom-share-list" >
            <li className="share-link">
              <a className="facebook" href="https://www.facebook.com" >
                <img src={FacebookIcon} alt="facebook" title="facebook" />
              </a>
            </li>
            <li className="share-link">
              <a className="linkedin" href="https://www.linkedin.com/" >
                <img src={LinkedInIcon} alt="linkedin" title="linkedin" />
              </a>
            </li>
            <li className="share-link">
              <a className="twitter" href="https://x.com/" >
                <img src={TwitterIcon} alt="twitter" title="twitter" />
              </a>
            </li>
          </ul>
      </div>
      <div className="tag-outer-wrap">
        <a href="/" className="tag">Home Page</a>
      </div>
    </div>
    </div>
    // <div className="sidebar-container">
    //   <div></div>
    //   {/* <Sidebar blogs={BlogsData} /> */}
    // </div>
  )
}

export default Productview