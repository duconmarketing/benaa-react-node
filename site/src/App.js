import logo from './logo.svg';
import './css/style.css';
import './css/app.css';
import './css/style.ltr.css';
// import './css/style.rtl.css';

import Header from './components/Header';
import Category from './components/Category';
import SubCategory from './components/SubCategory';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>  
      <div className="site">
        <Header />
        <div class="site__body">
          <Switch>
              <Route exact path="/"><Category /></Route>  
              <Route exact path="/product/:category" component={SubCategory} />
              <Route path="/product/:category/:subcategory" component={ProductList} />
              <Route path="/product/:category/:subcategory/:productId" component={ProductDetails} />
          </Switch>
        </div>
      </div>
    </Router>    
  );
}

export default App;
