import React from 'react'

class Footer extends React.Component {
    render() {
        return (

            <section className="footer">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <h1>POPULAR CATEGORIES</h1>
                        <p>Cars</p>
                        <p>Flats for rent</p>
                        <p>Jobs</p>
                        <p>Mobile Phones</p>
                    </div>

                    <div class="col-md-2">
                        <h1>TRENDING SEARCHES</h1>
                        <p>Bikes
                    </p>
                        <p>Watches</p>
                        <p>Books</p>
                        <p>Dogs</p>
                    </div>
                    <div class="col-md-2">
                        <h1>ABOUT US</h1>
                        <p>Facebook</p>
                        <p>YouTube</p>
                        <p>Linkedin</p>
                        <p> Twitter</p>
                    </div>

                    <div class="col-md-2">
                        <h1>OLX</h1>
                        <p>Help</p>
                        <p> Sitemap</p>
                        <p> Legal  Privacy</p>
                    </div>
                </div>
            </section>

        )
    }
}

export default Footer;