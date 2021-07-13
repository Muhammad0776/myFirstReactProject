import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./Section02.css"

class Section02 extends React.Component {
    render() {
        return <section>
            <div className="container py-5">
                <h2 class="text-center">What Clients Say</h2>
                <p class="text-center mb-5">Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
                <div className="row">

                    <div className="col-12 col-sm-12 col-lg-6">
                        <div class="card mb-3 bg-white text-dark py-2 shadow-none">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="/img/user.png" class="img-fluid rounded-start w-100 h-100" alt="" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Regina Miles</h5>
                                        <p class="card-text mb-4 text-start text-muted">Designer</p>
                                        <div className="mb-4"><FaStar className="text-warning" /><FaStar className="text-warning" /><FaStar className="text-warning" /><FaStar className="text-warning" /><FaStarHalfAlt className="text-warning" /></div>
                                        <p class="card-text text-muted text-start">This proved to be impossible using
                                            concepts of space and time. Einstein
                                            new view of time first and then</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-lg-6">
                        <div class="card mb-3 bg-white text-dark py-2 shadow-none">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="/img/user2.png" class="img-fluid rounded-start w-100 h-100" alt="" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Regina Miles</h5>
                                        <p class="card-text mb-4 text-start text-muted">Designer</p>
                                        <div className="mb-4"><FaStar className="text-warning" /><FaStar className="text-warning" /><FaStar className="text-warning" /><FaStar className="text-warning" /><FaStarHalfAlt className="text-warning" /></div>
                                        <p class="card-text text-muted text-start">This proved to be impossible using
                                            concepts of space and time. Einstein
                                            new view of time first and then</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    }
}

export default Section02;