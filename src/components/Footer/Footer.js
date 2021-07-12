import React from 'react'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";
import "./Footer.css"

class Footer extends React.Component {
    render() {
        return <footer>
            <div className="container py-5 pb-2">
                <div className="d-flex justify-content-between">
                    <h3 className="fs-4">BrandName</h3>
                    <div className="d-flex">
                        <a href="#"><IoLogoFacebook className="me-3 icon" /></a>
                        <a href="#"><IoLogoInstagram className="me-3 icon" /></a>
                        <a href="#"><IoLogoTwitter className="me-3 icon" /></a>
                    </div>
                </div>
                <hr className="text-light" />
                <div className="d-flex justify-content-between">
                    <div className="d-flex px-0">

                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                <p>Company Info</p>
                                <ul className="ps-0 me-5">
                                    <li><a href="#" className="style">About Us</a></li>
                                    <li><a href="#" className="style">Carrier</a></li>
                                    <li><a href="#" className="style">We are hiring</a></li>
                                    <li><a href="#" className="style">Blog</a></li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                <p>Company Info</p>
                                <ul className="ps-0 me-5">
                                    <li><a href="#" className="style">About Us</a></li>
                                    <li><a href="#" className="style">Carrier</a></li>
                                    <li><a href="#" className="style">We are hiring</a></li>
                                    <li><a href="#" className="style">Blog</a></li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                <p>Features</p>
                                <ul className="ps-0 me-5">
                                    <li><a href="#" className="style">Business</a></li>
                                    <li><a href="#" className="style">User Analytic</a></li>
                                    <li><a href="#" className="style">Live Chat</a></li>
                                    <li><a href="#" className="style">Support</a></li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                <p>Resources</p>
                                <ul className="ps-0 me-5">
                                    <li><a href="#" className="style">IOS & Android</a></li>
                                    <li><a href="#" className="style">Watching</a></li>
                                    <li><a href="#" className="style">Customers</a></li>
                                    <li><a href="#" className="style">API</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>Get In Touch</p>
                        <label for="validationDefaultUsername" htmlFor="">Touch</label>
                        <div class="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Your Email" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                            <button class="btn btn-outline-secondary" type="button">Subscribe</button>
                        </div>
                        <p className="title0">Lorem impsum dolor amit</p>
                    </div>

                </div>
                <p className="vertical">Made With Love By Figmaland All Right Reserved </p>
            </div>
        </footer>
    }
}

export default Footer;