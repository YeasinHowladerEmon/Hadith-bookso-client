import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const { id } = useParams();
    console.log(id)
    const [product, setProduct] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch(`https://guarded-escarpment-39447.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const HandleOrderDetails = () => {
        const orderDetails = { ...loggedInUser, ...product, orderTime: new Date() }

        fetch('https://guarded-escarpment-39447.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order placed successfully')
                }
            })
    }

    return (
        <div className="checkOut pt-5 mt-5">
            <h1><center>Check Out</center></h1>
            <Table>
                <thead>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                </thead>
                <tbody>
                    <td>{product.name}</td>
                    <td>1</td>
                    <td> $ {product.price}</td>
                </tbody>
                <tfoot>
                    <td></td>
                    <td></td>
                    <td>Total: $ {product.price}</td>
                </tfoot>
            </Table>
            <button onClick={HandleOrderDetails}>place order</button>
        </div>
    );
};

export default Checkout;