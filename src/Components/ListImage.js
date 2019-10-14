import React from 'react'

const ListImage = ({ img, title, category }) => (
    <li className="item">
        <a style={{ textDecoration: "none" }} className="afs" href="http://www.google.com">
            <figure className="mb-0">
                <img className="fig pb-0" src={img} alt="okok" />
                <figcaption className="figC">
                    <div className="text-center divf" >
                        <span className="figSpan">
                            {title}
                        </span>
                        <p className="figPar">
                            {category}
                        </p>
                    </div>
                </figcaption>
            </figure>
        </a>
    </li>
)
export default ListImage
