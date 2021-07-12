import React from 'react'
import "./About.css";
import { IoHeadsetOutline } from "react-icons/io5";
import { RiBuildingLine } from "react-icons/ri";
import video from "../video/video.mp4";

class About extends React.Component {
    render() {
        return <section>
            <div className="container py-5">
                <h2 class="text-center tit">About Us</h2>
                <p className="text-center mb-5 subt">Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-6 mt-4">
                        <video src={video} className="w-100 rounded" autoPlay loop controls muted></video>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6 text-center mt-4 ps-0 pe-5">
                        <h5 className="mb-3 text-white">Most trusted in our field</h5>
                        <p className="mb-5 px-5 text-start d-flex justify-content-center align-items-center">Most calendars are designed for teams. Slate <br />
                            is designed for freelancers who want a <br />
                            simple way to plan their schedule.</p>
                        <div className="d-flex mb-3 justify-content-center align-items-center mb-4 ps-5">
                            <IoHeadsetOutline className="widhei" />
                            <div className="text-start">
                                <p>the quick fox jumps over the lazy dog</p>
                                <small>Things on a very small scale ...</small>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center ps-5">
                            <RiBuildingLine className="widhei" />
                            <div className="text-start">
                                <p>the quick fox jumps over the lazy dog</p>
                                <small>Things on a very small scale ...</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default About;