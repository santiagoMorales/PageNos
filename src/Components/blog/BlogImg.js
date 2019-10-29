import React from 'react'

const BlogImg = ({ img }) => (
    <li className="grid-item">
        <div className="img-grid">
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                <img className="imgG" src={img} alt="ok"></img>
            </a>
            <div className="blogC">
                <a className="oneP" href="http://www.google.com" target="_blank" rel="noopener noreferrer" >
                    One Page
                 </a>
            </div>
        </div>
        <div className="text-grid">
            <a className="textG" href="http://www.youtube.com">
                I like the body. I like to design everything to do with the body.
             </a>
            <div className="autor">
                <span className="text-auth">
                    BY <span><a className="auth" href="http://www.google.com">Jay Benjamin</a></span>
                    <span className="separator"> | </span> <span className="date">20 April 2017</span>
                </span>
            </div>
            <div className="lineDiv"></div>
            <div className="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard...
            </div>
        </div>
    </li>
)
export default BlogImg