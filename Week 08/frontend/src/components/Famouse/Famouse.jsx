import React from 'react'
import './famouse.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'

const Famouse = () => {
  return (
    <div className='famouse'>
      <h1>WOMEN FASHION IN TREND!</h1>
      <hr />
      <div className="famouse-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Famouse
