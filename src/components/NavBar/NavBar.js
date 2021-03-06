import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'


class Navbar extends React.Component{
    render() {
        return (
            <div id="main-navbar" className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom shadow-lg">
                <h5 className="my-0 mr-md-auto font-weight-normal">Staples Web App</h5>
                <div>
            
                </div>
                
                    <nav className="my-2 my-md-0 mr-md-3 navbar-text ">
                        
                        <Link to="/">
                            All Items
                        </Link>
                        <a className="p-2" href="/">Displays</a>
                        <a className="p-2" href="https://github.com/AlexNYC25/StaplesStoreReact">Github</a>
                        <Link to="/DataManipulation">
                            Data Control Panel
                        </Link>
                    </nav>
                
            </div>
        );
    }ß

}

export default Navbar;