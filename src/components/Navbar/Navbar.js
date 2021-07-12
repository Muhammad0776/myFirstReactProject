import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import "./Navbar.css"


class Navbar extends React.Component {
    render() {
        return <nav class="py-4 navbar navbar-expand-lg navbar-light">
            <div class="container container-flied">
                <a class="navbar-brand text-white me-5" href="https://www.brandsbusiness.eu/">BrandName</a>
                <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ms-5" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-white active pb-0" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white pb-0" href="#">Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white pb-0" href="pricing">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white pb-0" href="https://figmaland.com/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <p className="me-5 mb-0 d-flex justify-content-cneter align-items-center"><a href="https://wordpress.com/wp-login.php?redirect_to=https%3A%2F%2Fwordpress.com%2F">Log in</a></p>
                    <button type="button" class="btn btn-primary btn-lg">Become a member <FaArrowRight className="ms-3" /></button>
                </div>
            </div>
        </nav >
    }
}

export default Navbar;