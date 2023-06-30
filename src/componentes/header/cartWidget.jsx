import React from 'react';

const CartWidget() {
  const cartItemCount = 5; 

  return (
    <div className="cart-widget">
      <i className="fa fa-shopping-cart"></i> 
      <span className="cart-notification">{cartItemCount}</span> 
    </div>
  );
}

export default CartWidget;
