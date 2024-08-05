import React, { useContext } from 'react'
import { ShopContext } from '../ContextAPI/ShopContext'
import Item from '../components/Items/Item'
import './Css/ShopCat.css'
import all_product from '../components/Assets/all_product'
import dropdown from '../components/Assets/dropdown_icon.png'

const ShopCat = (props) => {
  const { all_products } = useContext(ShopContext)
  return (
    <div className='shopCategories'>
      <img className='cat-banner' src={props.banner} alt="" />
      <div className="shopCat-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="shopCat-sort">
          Sort by <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopCat-products">
        {all_product.map((item, i) => {
          if (props.category == item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else{
            return null;
          }
        })}
      </div>
      <div className="shopCat-loadMore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCat
