import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const products = (props) => {
    const { name, price, author, imageURL, _id } = props.product;
    return (   
        <>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{author}</Card.Text>
                    <Link to={`/product/${_id}`}><button  className="change-color sec-3">Buy Now</button></Link>
                </Card.Body>
            </Card>
        </>
         
    );
};

export default products;