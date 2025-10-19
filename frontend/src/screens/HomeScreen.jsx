import React from 'react'
import { Row, Col } from 'react-bootstrap' // Make sure you import Row and Col
import products from './products' // Your array of product data
import Product from '../components/Product' // The component you showed earlier
// Make sure you also import Container if needed for page structure

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            {/* 🛑 FIX: The list of products must be wrapped in a <Row> */}
            <Row>
                {products.map((product) => (
                    // This is the Col you want to apply:
                    <Col
                        key={product._id}
                        sm={12} // Full width on small screens
                        md={6}  // 2 products per row on medium screens
                        lg={4}  // 3 products per row on large screens
                        xl={3}  // 4 products per row on extra-large screens
                    >
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen