import React from 'react'
import "./Counter.css"

class Counter extends React.Component {
    render() {
        return <div className="container py-3 counter">
            <button className="btn btn-dark">Submit</button>
        </div>
    }
}

export default Counter;