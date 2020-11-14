import React from 'react'
import holx from '../images/homeimage.png'

class Olximg extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div class="ad-image">
                        <img src={holx} className="im"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Olximg;