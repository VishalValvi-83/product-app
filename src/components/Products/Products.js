import "./Products.css";
import { Link } from 'react-router-dom';

const Products = ({ id, title, image, description, price, rating }) => {
  const truncatedTitle = title && title.length > 50  ? title.substring(0, 50) : title;
  const truncatedContent = description && description.length > 70 ? description.substring(0, 70) + '...' : description;
  return (    
      <Link to={`/product/${id}`} className="product-card ">
        <div className="product-image w-50">
          <img src={image} alt={truncatedTitle} className="img-fluid" />
        </div>
        <div className="product-body">
          <h2 className="product-title">{truncatedTitle}</h2>
          <p className="product-description ">
            {truncatedContent} <span className="read-more">Read more</span>
          </p>
          <p className="product-price text-center">
            <strong>{price}</strong>
          </p>
        </div>
        
        
      </Link>
  );
};

export default Products;