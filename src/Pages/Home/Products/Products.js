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
            <h2 className="fw-bold mt-4">Tv <span className="text-danger">Shows</span></h2>
            <div className="divider mb-4 mx-auto"></div>
             <Row xs={1} md={3} lg={4} className="g-4 mb-5">
               {
                  products?.length ? products.map(product => <Product
                   key={product.show.id}
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