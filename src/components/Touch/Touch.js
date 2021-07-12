import React from 'react'
import { IoCallOutline, IoLocationOutline, IoMail } from "react-icons/io5";
import "./Touch.css"

class Touch extends React.Component {
    render() {
        return <section id="touch">
            <div className="container py-5">
                <h2 class="text-center title mb-3">Get In Touch</h2>
                <p className="text-center mb-5 subtitle">Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
                <div className="row pt-5">

                    <div className="col-12 col-sm-6 col-lg-4 bg-light px-0 py-3 how mb-5">
                        <div className="text-center pt-0 shadow-none border-end">
                            <div className="py-4 px-0">
                                <h5 className="pt-0 mb-2"><IoCallOutline className="size" /></h5>
                                <p><a href="#">georgia.young@example.com <br /> georgia.young@ple.com</a></p>
                                <a href="#" class="fw-bold mb-3 d-block">Get Support</a>
                                <button type="button" class="btn btn-lg btn-outline-info px-4">Submit Request</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 bg-light px-0 py-3 how mb-5">
                        <div className="text-center pt-0 shadow-none border-end">
                            <div className="py-4 px-0">
                                <h5 className="pt-0 mb-2"><IoLocationOutline className="size" /></h5>
                                <p><a href="#">georgia.young@example.com <br /> georgia.young@ple.com</a></p>
                                <a href="#" class="fw-bold mb-3 d-block">Get Support</a>
                                <button type="button" class="btn btn-lg btn-outline-info px-4">Submit Request</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 bg-light px-0 py-3 how mb-5">
                        <div className="text-center pt-0 shadow-none">
                            <div className="py-4 px-0">
                                <h5 className="pt-0 mb-2"><IoMail className="size" /></h5>
                                <p><a href="#">georgia.young@example.com <br /> georgia.young@ple.com</a></p>
                                <a href="#" class="fw-bold mb-3 d-block">Get Support</a>
                                <button type="button" class="btn btn-lg btn-outline-info px-4">Submit Request</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    }
}

export default Touch;