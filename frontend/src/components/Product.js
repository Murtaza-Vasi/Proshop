import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <div>
            {product.rating} from {product.numReviews} reviews
        </div>
        </Card.Text>
      </Card.Body>

      <Card.Text as='h3'>Rs. {product.price}</Card.Text>
    </Card>
  )
}

export default Product
