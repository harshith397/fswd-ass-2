import React from 'react';
import './ProductCard.css';

// Question 1: Reusable ProductCard Component
function ProductCard({
  name = 'Wireless Bluetooth Headphones',
  price = 49.99,
  image = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80',
  rating = 4.2,
}) {
  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img
          src={image}
          alt={name}
          className="product-img"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80';
          }}
        />
      </div>

      <div className="product-body">
        <h3 className="product-title">{name}</h3>

        <div className="product-meta">
          <span className="rating-badge">⭐ {Number(rating).toFixed(1)} / 5</span>
        </div>

        <div className="product-footer">
          <span className="product-price">${Number(price).toFixed(2)}</span>
          <button
            type="button"
            className="add-cart-btn"
            onClick={() => alert(`Added "${name}" to cart!`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// defaultProps as specified in question requirements
ProductCard.defaultProps = {
  name: 'Wireless Bluetooth Headphones',
  price: 49.99,
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80',
  rating: 4.2,
};

export default ProductCard;
