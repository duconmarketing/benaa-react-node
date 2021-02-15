const fetch = require("node-fetch");

const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'JMJ'
    });
};

const categories = async (req, res, next) => {
    const url = 'https://dev-ducon.cs100.force.com/services/apexrest/DuconSiteFactory/categories';
    const cat_res = await fetch(url, {method: 'POST'});
    const cat_json = await cat_res.json();
    res.status(200).json({
        categories: cat_json.data
    });
};

const subCategories = async (req, res, next) => {
    const body = {categoryId: req.params.category}
    const url = 'https://dev-ducon.cs100.force.com/services/apexrest/DuconSiteFactory/subcategories';
    const cat_res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
    });
    const cat_json = await cat_res.json();
    res.status(200).json({
        subcategories: cat_json.data
    });

};

const productList = async (req, res, next) => {
    const body = {subcategoryId: req.params.subcategory}
    const url = 'https://dev-ducon.cs100.force.com/services/apexrest/DuconSiteFactory/fetchProducts';
    const cat_res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
    });
    const cat_json = await cat_res.json();
    res.status(200).json({
        productList: cat_json.data
    });

};

const productDetails = async (req, res, next) => {
    const body = {pricebookEntryId: req.params.productId}
    const url = 'https://dev-ducon.cs100.force.com/services/apexrest/DuconSiteFactory/productDetail';
    const cat_res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
    });
    const cat_json = await cat_res.json();
    res.status(200).json({
        productDetails: cat_json.data
    });

};

module.exports.saySomething = saySomething;
module.exports.categories = categories;
module.exports.subCategories = subCategories;
module.exports.productList = productList;
module.exports.productDetails = productDetails;