import './App.css';
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import HomePage from "./HomePage";
import CustomerPage from "./CustomerPage";
import ProductsPage from "./ProductsPage";
import SalesPage from "./SalesPage";
import UpdateForm from "./UpdateForm";
import AddCustomerPage from "./AddCustomerPage";
import AddProductPage from "./AddProductPage";

function App() {
  return (

      <div className="App">
          <NavBar/>

          <Router>
              <Switch>
                  <Route exact path="/">
                      <HomePage/>
                  </Route>
                  <Route exact path="/HomePage">
                      <HomePage/>
                  </Route>
                  <Route path="/CustomerPage">
                      <CustomerPage/>
                  </Route>
                  <Route path="/ProductsPage">
                      <ProductsPage/>
                  </Route>
                  <Route path="/SalesPage">
                      <SalesPage/>
                  </Route>
                  <Route path="/UpdateForm">
                      <UpdateForm/>
                  </Route>
                  <Route path="/ProductsPage">
                      <ProductsPage/>
                  </Route>
                  <Route path="/AddProductPage">
                      <AddProductPage/>
                  </Route>
                  <Route path="/AddCustomerPage">
                      <AddCustomerPage/>
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
