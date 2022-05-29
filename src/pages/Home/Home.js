import React from 'react'
import Campaign from '../../components/Campaign/Campaign'
import Product from '../../components/Products/Products'
import Slider from '../../components/Slider/Slider'

function Home() {
  return (
    <div>
      <Slider />
      <Campaign/>
    </div>
  )
}

export default Home