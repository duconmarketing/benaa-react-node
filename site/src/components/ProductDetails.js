import React, {useState, useEffect, Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import axios from 'axios';

const ProductDetails = (props) => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const { match: { params } } = this.props;
        axios.get(`/api/v1/product-details/${params.productId}`,).then(response => {
            setProductData(response);
        });
    })

    console.log(productData);
    return (
        <h1>Product</h1>
    )
}

export default ProductDetails;