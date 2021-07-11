import React from 'react'
import "./Section.css"
// import img from "./components/img/Vector (5).png"

class Section extends React.Component {
    render() {
        return <section>
            <div className="container py-5 text-center">
                <h2 className="mb-3 lh-base">Better Strategy With <br /> Quality Business</h2>
                <p className="mb-5">Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
                <div className="row">

                    <div className="col-12 col-sm-6 col-lg-4 px-3">
                        <div className="card d-flex py-4 px-2 mb-4 text-left">
                            {/* <img src={img} alt="" /> */}
                            <div>
                                <h4 className="mb-2">Investment Trading</h4>
                                <p>the quick fox jumps over the <br /> lazy dog</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    }
}

export default Section;