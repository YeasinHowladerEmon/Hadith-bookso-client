import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    // 
    useEffect(() => {
        fetch('https://guarded-escarpment-39447.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h2>{loggedInUser.email}</h2>
            <h3>you have {orders.length}</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Order Time</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                {
                    orders.map(book =>
                        <tbody>
                            <tr >
                                <td key={book._id}></td>
                                <td>{book.name}</td>
                                <td>{book.email}</td>
                                <td>{(new Date(book.orderTime).toDateString('dd/MM/yyyy'))}</td>
                                <td>1</td>
                                <td>{book.price}</td>
                            </tr>
                        </tbody>
                    )
                }

            </table>
        </div>
    );
};

export default Orders;