import React from 'react';

const Product = (props) => {
   
        return (
          
            <div className="product">
            <img src={props.img_url} alt="" />
            <div className="name">{props.name}</div>
            </div>

        )
    
}

export default Product;