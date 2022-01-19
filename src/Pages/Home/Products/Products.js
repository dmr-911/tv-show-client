import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <Container>
             <Row xs={1} md={4} className="g-4">
               {
                  products?.length ? products.map(product => <Product
                   key={product.key}
                   product={product}
                   ></Product>)
                   :
                   <div className="d-flex justify-content-center align-items-center w-100" style={{height: '80vh'}}>
                   <div>
                   <Spinner animation="grow" size="sm" />
                   <Spinner animation="grow" />
                   </div>
                 </div>
               }
            </Row>
        </Container>
    );
};

export default Products;