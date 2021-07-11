import React from 'react'
import { IoCheckmarkCircleSharp, IoCheckmarkCircleOutline } from "react-icons/io5";
import "./Pricing.css"

class Pricing extends React.Component {
    render() {
        return <section>
            <div className="container py-5">
                <h2 class="text-center title mb-3">Pricing</h2>
                <p className="text-center mb-5 subtitle">Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>

                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4 me-0 mb-4">
                        <div class="card text-center bg-light text-dark pt-0 me-0">
                            <div class="card-body py-4">
                                <h5 class="card-title mb-4">FREE</h5>
                                <p class="card-text text-muted mb-5">Organize across all <br /> apps by hand</p>
                                <div className="mb-4">
                                    <span className="text-primary fs-1">0$</span>
                                    <p className="text-primary mt-2">Per Month</p>
                                </div>
                                <button class="btn btn-lg btn-primary px-5 border"><a href="#" className="text-light">Try for free</a></button>
                                <ul className="pt-4 ul">
                                    <li><IoCheckmarkCircleSharp className="text-success me-2 icons" />Unlimited product updates</li>
                                    <li><IoCheckmarkCircleSharp className="text-success me-2 icons" />Unlimited product updates</li>
                                    <li><IoCheckmarkCircleSharp className="text-success me-2 icons" />Unlimited product updates</li>
                                    <li><IoCheckmarkCircleOutline className="text-secondary me-2 icons" />1GB  Cloud storage</li>
                                    <li><IoCheckmarkCircleOutline className="text-secondary me-2 icons" />Email and community support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-lg-4 me-0 mb-4">
                        <div class="card text-center bg-light text-dark pt-0 me-0">
                            <div class="card-body py-4">
                                <h5 class="card-title mb-4">Silver</h5>
                                <p class="card-text text-muted mb-5">Organize across all <br /> apps by hand</p>
                                <div className="mb-4">
                                    <span className="text-primary fs-1">9.99$</span>
                                    <p className="text-primary mt-2">Per Month</p>
                                </div>
                                <button class="btn btn-lg btn-primary px-5 border"><a href="#" className="text-light">Try for free</a></button>
                                <ul className="pt-4 ul">
                                    <li><IoCheckmarkCircleSharp className="text-success me-2 icons" />Unlimited product updates</li>
                                    <li><IoCheckmarkCircleSharp className="text-success me-2 icons" />Unlimited product updates</li>
                                    <li><IoCheckmarkCircleSharp className="text-success me-2 icons" />Unlimited product updates</li>
                                    <li><IoCheckmarkCircleOutline className="text-secondary me-2 icons" />1GB  Cloud storage</li>
                                    <li><IoCheckmarkCircleOutline className="text-secondary me-2 icons" />Email and community support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-lg-4 me-0 mb-4">
                        <div class="card text-center bg-light text-dark pt-0 me-0">
                            <div class="card-body py-4">
                                <h5 class="card-title mb-4">GOLD</h5>
                                <p class="card-text text-muted mb-5">Organize across all <br /> apps by hand</p>
                                <div className="mb-4">
                                    <span className="text-primary fs-1">19.99$</span>
                                    <p className="text-primary mt-2">Per Month</p>
                                </div>
                                <button class="btn btn-lg btn-primary px-5 border"><a href="#" className="text-light">Try for free</a></button>
                                <ul className="pt-4 ul">
                                    <li><IoCheckmarkCircleSharp className="text-success me-2 icons" />Unlimited product updates</li>
                                    <li><IoCheckmarkCircleSharp className="text-success me-2 icons" />Unlimited product updates</li>
                                    <li><IoCheckmarkCircleSharp className="text-success me-2 icons" />Unlimited product updates</li>
                                    <li><IoCheckmarkCircleOutline className="text-secondary me-2 icons" />1GB  Cloud storage</li>
                                    <li><IoCheckmarkCircleOutline className="text-secondary me-2 icons" />Email and community support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    }
}

export default Pricing;