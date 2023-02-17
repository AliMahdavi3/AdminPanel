import React from 'react'
import CartTable from './CartTable'

const CartEdit = () => {
          return (
              <div id="manage_cart_section" className="manage_cart_section main_section container-fluid category-style">
                <h4 className="text-center my-3 category-text">مدیریت سبد خرید</h4>
                <CartTable/>
            </div>
          )
}

export default CartEdit