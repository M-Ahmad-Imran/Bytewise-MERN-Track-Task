import React from 'react'
import Hero from '../components/Hero/Hero'
import Famouse from '../components/Famouse/Famouse'
import Offer from '../components/Offers/Offer'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Famouse />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop
