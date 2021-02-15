import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import axios from 'axios';
// import SubCategoryHome from './SubCategoryHome';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        axios.get('/api/v1/categories').then(response => {
            this.setState({
                categories: response.data.categories
            });
        });
    }

    render() {
        const {categories} = this.state;
        return (
            <div class="block block--highlighted block-categories block-categories--layout--classic">
                <div class="container">
                    <div class="block-categories__list">

                        {categories.map(category => (
                            <div className="block-categories__item category-card category-card--layout--classic">
                                <div className="category-card__body">
                                    <div className="category-card__image">
                                        <a href={"product/" + category.Id}><img src={category.Image_URL__c} alt="" /></a>
                                        <div className="category-card__name">
                                            <Link to={"/product/" + category.Id} style={{textTransform: 'capitalize'}}>
                                                {category.Name}
                                            </Link>
                                        </div>
                                        <ul className="category-card__links">
                                        </ul>
                                        <div className="category-card__all">
                                            <Link to={"/product/" + category.Id}>
                                                Show All
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
        );
    }
}

export default Category;

function Child(){
    let {Id} = useParams();
    return (
        <div>
            <h3>Category : {Id}</h3>
        </div>
    );
}


