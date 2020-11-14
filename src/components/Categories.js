import React from 'react'

class Categories extends React.Component {
    render() {
        return (
            <div className="Cat-Manu">
                <div className="categories">
                    <span className="all-cat">ALL CATEGORIES</span>
                    <span className="fa fa-angle-down"></span>
                </div>

                <div className="sub-categories">


                    <div className="cat-of">
                        <a href="" className="sub-cat-of">
                            <span>Mobile Phones</span>
                        </a>
                    </div>


                    <div className="cat-of">
                        <a href="" className="sub-cat-of">
                            <span>Motorcycles</span>
                        </a>
                    </div>


                    <div className="cat-of">
                        <a href="" className="sub-cat-of">
                            <span>Houses</span>
                        </a>
                    </div>


                    <div className="cat-of">
                        <a href="" className="sub-cat-of">
                            <span>TV - Video - Audio</span>
                        </a>
                    </div>


                    <div className="cat-of">
                        <a href="" className="sub-cat-of">
                            <span>Tablets</span>
                        </a>
                    </div>

                    <div className="cat-of">
                        <a href="" className="sub-cat-of">
                            <span>Land  Plots</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;