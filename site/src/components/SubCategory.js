import React from 'react';
import {
    Link,
  } from "react-router-dom";
import axios from 'axios';
// import SubCategoryHome from './SubCategoryHome';

class SubCategory extends React.Component {
    constructor(props) {
        super(props);        
        this.state = {
            subCategories: [],
            category:[]
        };
    }

    componentDidMount() {        
        const { match: { params } } = this.props;
        axios.get(`/api/v1/subcategories/${params.category}`,).then(response => {
            this.setState({
                subCategories: response.data.subcategories
            });
        });
    }

    render() {
        const {subCategories} = this.state;
        return (
        <React.Fragment>
            <div className="shop-layout__sidebar">
                <div className="block block-sidebar block-sidebar--offcanvas--mobile">
                    <div className="block-sidebar__backdrop"></div>
                    <div className="block-sidebar__body">
                        <div className="block-sidebar__header">
                            <div className="block-sidebar__title">Filters</div>
                            <button className="block-sidebar__close" type="button">
                            </button>
                        </div>

                        <div className="block-sidebar__item">
                            <div className="widget-filters__list">
                                <div className="widget-filters__item">
                                    <div className="filter filter--opened">
                                        <div className="filter__body" >
                                            <div className="filter__container">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="container" style={{backgroundColor: '#fff'}}>
                <div class="shop-layout shop-layout--sidebar--start">

                    <div className="shop-layout__content">
                        <div className="block">
                            <div className="products-view">
                                <div className="products-view__list products-list" data-layout="grid-3-sidebar" data-with-features="false" data-mobile-grid-columns="2">
                                    <div className="products-list__body"></div>
                                    {subCategories.map(category => (                    
                                            <div className="products-list__item">
                                                <div className="product-card text-center">
                                                    <div className="post-card__image">
                                                        <Link to={"/product/" + category.Id +"/"+ category.Id}>
                                                            <img src={category.Image_URL__c} alt={category.Name} />
                                                        </Link>
                                                    </div>
                                                    <div className="post-card__info mt-2 mb-2">
                                                        <div className="post-card__name text-center">
                                                            <Link to={"/product/" + category.Id +"/"+ category.Id}>
                                                                {category.Name}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                      
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </React.Fragment>
                );
    }
}

export default SubCategory;