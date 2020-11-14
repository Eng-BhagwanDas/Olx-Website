import React from 'react'
import P1 from '../images/product1.jpg'
import P2 from '../images/product2.jpg'
import P3 from '../images/product3.jpg'
import P4 from '../images/product4.jpg'
import P5 from '../images/product5.png'
import P6 from '../images/product6.png'
import P7 from '../images/product7.png'
import P8 from '../images/product8.png'
import P9 from '../images/product9.png'
import P10 from '../images/product10.png'
import P11 from '../images/product11.png'
import P12 from '../images/product12.png'
import P13 from '../images/product13.png'
import P14 from '../images/product14.png'
import P15 from '../images/product15.png'
import P16 from '../images/product16.png'


class Cards extends React.Component {

    render() {
        return (
            <div className="on-sale">
                <div className="title-box">
                    <h2>Fresh recommendations</h2>
                </div>


                <div className="row">
                    <div className="col-md-3">
                        <div className="product-top">
                            <a href="product.html"><img src={P1} /></a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="product-top">
                            <a href="product.html"><img src={P2} /></a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="product-top">
                            <a href="product.html"><img src={P3} /></a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="product-top">
                            <a href="product.html"><img src={P4} /></a>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="product-top">
                            <a href="product.html"><img src={P5} /></a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="product-top">
                            <a href="product.html"><img src={P6} /></a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="product-top">
                            <a href="product.html"><img src={P7} /></a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="product-top">
                            <a href="product.html"><img src={P8} /></a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <div class="product-top">
                            <a href="product.html"><img src={P9} /></a>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="product-top">
                            <a href="product.html"><img src={P10} /></a>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="product-top">
                            <a href="product.html"><img src={P11} /></a>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="product-top">
                            <a href="product.html"><img src={P12} /></a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <div class="product-top">
                            <a href="product.html"><img src={P13} /></a>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="product-top">
                            <a href="product.html"><img src={P14} /></a>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="product-top">
                            <a href="product.html"><img src={P15} /></a>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="product-top">
                            <a href="product.html"><img src={P16} /></a>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}

export default Cards;