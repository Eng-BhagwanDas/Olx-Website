import React from 'react'
import Logo from '../images/olx-logo-vector.png'
import Searchicon from '../images/searchicon - Copy.png'
import Sellimage from '../images/Sell logo.png'

class Header extends React.Component {
    render() {
        return (
            <div className="topnav" id="myTopnav">
                <span>
                    <img src={Logo} className="logo" />
                </span>

                <span>
                    <input type="text" name="search" placeholder=" Pakistan" className="input-text1" />
                </span>

                <span>
                    <input type="text" name="search" placeholder="Find Cars Mobile Phones and aore..."
                        className="input-text2"/><img src={Searchicon} className="search-icon" />
                </span>
                     <span className="login-link">
                        <a href="">
                            Login
                        </a>
                    </span>
                    <span><img src={Sellimage} className="sell-logo"/>
                    </span>
        
            </div>

        )
    }
}

export default Header;