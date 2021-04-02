import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://guarded-escarpment-39447.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (

            <Row className = " align-items-center pt-5 mt-5">
                {
                    products.length === 0 && <center><Spinner style={{textAlign: 'center'}} animation="grow" /></center>
                }
                {
                    products.map(product => <Col><Product  key={product._id}  product={product}></Product></Col>)
                }
            </Row>
          

    );
};

export default Home;