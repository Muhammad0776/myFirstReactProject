import React from 'react'
import "./Counter.css"

class Counter extends React.Component {
    render() {
        return <div className="py-5 text-center counter">
            <div className="container mt-5 py-5 text-white">
                <h1 className="mb-4 h1">Creating a Beautifull <br /> & Usefull Solutitons</h1>
                <p className="mb-5 p">We know how large objects will act, but things on a <br />
                    small scale just do not act that way.</p>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary me-3 py-2 px-5">Get Quote Now</button>
                    <button className="btn rad py-2 px-5">Learn More</button>
                </div>
            </div>
        </div>
    }
}

export default Counter;