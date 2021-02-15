import React, {useState, useEffect, Component} from 'react';
import axios from 'axios';
import ProductListItem from './ProductListItem';

export default (props) => {

    const [productData, setProductData] = useState([]);
    useEffect(() => {
        const { params } = props.match;
        axios.get(`/api/v1/product-list/${params.subcategory}`,).then(response => {
            setProductData(response.data.productList);
        });
    }, [])

    if(productData.length > 0){
        return(
            <div className="container" style={{backgroundColor: '#fff;'}}>
                <div className="shop-layout shop-layout--sidebar--start"></div>
                <ProductListItem data={productData} />
            </div>
        )        
    }else{
        return(
            <div className="container" style={{backgroundColor: '#fff;'}}>
                <div className="shop-layout shop-layout--sidebar--start"></div>
                <h1>No data</h1>
            </div>
        )
    }
}