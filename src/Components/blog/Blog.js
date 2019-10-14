import React from 'react'
import BlogImg from './BlogImg'
import blog5 from '../../Blog/blog5.jpg'

function Blog() {
    return (
        <div className="container pt-5">
            <div className="wrapper">
                <div className="row pt-5">
                    <div className="col col-sm-2 col-lg-3 col-md-3 col-xs-12 pt-4"></div>
                    <div className="col col-sm-8 col-lg-6 col-md-6 col-xs-12 text-center pt-4">
                        <div className="columBlog">
                            <div className="wrapper">
                                <h5 className="blogH">RECENT BLOG</h5>
                                <div className="blogP">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                         Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum has been the industry.
                                         Lorem Ipsum has been the industry’s standard dummy text since.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 col-lg-3 col-md-3 col-xs-12 pt-4"></div>
                </div>
                <div className="row rowBlog">
                    <div className="col col-sm-12  col-xs">
                        <div className="col-in">
                            <div className="wrapper">
                                <ul className="grid">
                                    <BlogImg
                                        img={blog5} />
                                    <BlogImg
                                        img={blog5} />
                                    <BlogImg
                                        img={blog5} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Blog