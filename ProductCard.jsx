import React from 'react'
import "./productCard.css";

import iphone from "../../assets/iphone.jpg"
import star from "../../assets/white-star.png"
import basket from "../../assets/basket.png"

const ProductCard = () => {
  return (
    <div>
      <article className='product_card'>
        <div className="product_image">
            <a href="product/1"><img src={iphone} alt="product image" /></a>
        </div>

        <div className="product_details">
            <h3 className='product_price'>$999</h3>
            <div className="product_title">iphone 14 PRO</div>

            <footer className='align_center product_info_footer'>
                <div className="align_center">
                    <p className="align_center product_rating">
                        <img src={star} alt="star" /> 5.0
                    </p>
                    <p className='product_review_count'>120</p>
                </div>

                <button className="add_to_cart">
                    <img src={basket} alt="basket" />
                </button>
            </footer>
        </div>
      </article>
    </div>
  )
}

export default ProductCard
