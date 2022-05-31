import React, { useEffect, useState } from 'react'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import "./singleProductPage.scss"
function SingleProductPage() {
    const [singleProduct, setSingleProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(res=>setSingleProduct(res))
    }, [])

  return (
      <div>
          <SingleProduct
              id={singleProduct.id}
              title={singleProduct.title}
              image={singleProduct.image}
              price={singleProduct.price}
              desc={singleProduct.description}
              category={singleProduct.category}
          />
    </div>
  )
}

export default SingleProductPage