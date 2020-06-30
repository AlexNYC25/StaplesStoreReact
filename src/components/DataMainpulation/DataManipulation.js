import React from 'react'
import { Button } from '@material-ui/core'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'

import NewProduct from '../NewProduct/NewProduct'
import NewProductImage from '../NewProductImage/NewProductImage'
import NewProductLocation from '../NewProductLocation/NewProductLocation'
import NewProductName from '../NewProductName/NewProductName'
import NewProductPrice from '../NewProductPrice/NewProductPrice'



class DataManipulation extends React.Component {
    
    render() {
        return (
            <div className="data-options">
                <div className="data-btn-section container">
                    
                    <div className="row btn-row">
                        <Button className="data-btn col col-4 mr-auto">
                            <Link to="/DataManipulation/NewProduct">
                                Add New Products
                            </Link>
                        </Button>

                        <Button className="data-btn col col-3 ml-auto">
                            <Link to="/DataManipulation/AddProductName">
                                Add Product Name
                            </Link>
                        </Button>

                        <Button className="data-btn col col-4 ml-auto">
                            <Link to="/DataManipulation/AddProductImage">
                                Add Product Images
                            </Link>  
                        </Button>
                    </div>

                    <div className="row btn-row justify-content-center">
                        <Button className="data-btn col col-4 mr-auto">
                            <Link to="/DataManipulation/AddProductLocation">
                                Add Location to Products
                            </Link>
                            
                        </Button>
                        <Button className="data-btn col col-4 ml-auto">
                            <Link to="/DataManipulation/AddProductPrice">
                                Change Product Price
                            </Link>
                            
                        </Button>
                    </div>
                    
                </div>

                <Switch>
                    <Route path="/DataManipulation/NewProduct" component={NewProduct}/>
                    <Route path="/DataManipulation/AddProductImage" component={NewProductImage} />
                    <Route path="/DataManipulation/AddProductName" component={NewProductName}/>
                    <Route path="/DataManipulation/AddProductPrice" component={NewProductPrice} />
                    <Route path="/DataManipulation/AddProductLocation" component={NewProductLocation} />
                </Switch>
            </div>
        )
    }
}

export default DataManipulation;