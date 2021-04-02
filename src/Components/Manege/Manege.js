import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Manege = () => {
   const [manage, setManage] = useState([])
   useEffect(() => {
    fetch('https://guarded-escarpment-39447.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setManage(data))
}, [])
    return (
        <div>
            <Table>
            <thead>
                    <th scope="col">Product Name</th>
                    <th scope="col">Author Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
            </thead>
            {
                 manage.map(book =>
                    <tbody >
                        <tr>
                            <td key={book._id}></td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td><button>Delete</button></td>
                        </tr>
                    </tbody>
                )
            }
            </Table>
        </div>
    );
};

export default Manege;