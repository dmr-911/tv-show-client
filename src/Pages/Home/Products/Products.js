import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    console.log(products);

    return (
        <Container>
            <Row xs={1} md={2} lg={3}>
                {
                    products.map(product => <Product
                    key={product.show.id}
                    product={product}
                    ></Product>)
                }
            </Row>
        </Container>
    );
};

export default Products;