
import {
    Link,
  } from "react-router-dom";
  
  export default (props) => {
    return (
        <div className="shop-layout__content">
            <div className="block">
                <div className="products-view">
                    <div className="products-view__list products-list" data-layout="grid-3-sidebar" data-with-features="false" data-mobile-grid-columns="2">
                        <div className="products-list__body">
                            {props.data.map(product => (
                                <div className="products-list__item">
                                    <div className="product-card ">
                                        <div className="product-card__image product-image">
                                            <Link to={"/product/cat/subcat/" + product.Id}>
                                                <img className="product-image__img" src={product.Product2.Thumbnails_URL__c} alt="" />
                                            </Link>
                                        </div>
                                        <div className="product-card__info">
                                            <div className="product-card__name">
                                                <Link to={"/product/cat/subcat/" + product.Id}>
                                                    {product.Name}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="product-card__actions">
                                            <div className="product-card__availability">
                                                Availability: <span className="text-success">In Stock</span>
                                            </div>
                                            <div className="product-card__prices" >
                                                AED {product.UnitPrice}
                                            </div>
                                            
                                            <div className="product-card__buttons">
                                                <button className="btn btn-primary product-card__addtocart" data-id={product.Id} data-name={product.Name} data-price={product.UnitPrice} data-image={product.Product2.Thumbnails_URL__c} data-link={"/product/cat/sub/" + product.Id} type="submit">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}