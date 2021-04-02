import React from 'react';

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import './addBook.css'

const AddBook = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        const productData = {
            name: data.product,
            price: data.price,
            author: data.author,
            imageURL: imageURL
        }
        const url = `https://guarded-escarpment-39447.herokuapp.com/addProduct`

        console.log(productData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '9ec83aeefa3d24c0aa6d749d38401ab4');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label  className="form-label">Book Name</label><br/>
                <input className="input" name="product" defaultValue="" ref={register} />
                <br />
                <br/>
                <label  className="form-label">Add Price</label><br/>
                <input className="input" name="price" defaultValue="" ref={register} />
                <br />
                <br/>
                <label  className="form-label">Author Name</label><br/>
                <input className="input" name="author" defaultValue="" ref={register} />
                <br />
                <br/>
                <label  className="form-label">Add Book Cover Photo</label><br/>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />

                <br />
                <input type="submit" value="save" />
            </form>
        </div>
    );
};

export default AddBook;