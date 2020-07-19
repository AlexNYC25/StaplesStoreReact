import React from 'react';

function Footer() {
    return(
        <footer id="app-footer" class="page-footer font-small blue pt-4 footer">
            <div class="container-fluid text-center text-md-left footer-links">
                <div class="row footer-links">
                    <div class="col-md-6 mt-md-0 mt-3">
                        <h5 class="text-uppercase">About</h5>
                        <p>A little info about the page</p>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3"></hr>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="text-uppercase">Tech used</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">React JS</a>
                            </li>

                        </ul>
                    </div>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="text-uppercase">Links</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">Bootstrap</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-copyright text-center py-3">Coded with Love and coffee
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
            
        </footer>

    )
}

export default Footer;