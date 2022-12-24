import React, { useState } from 'react'
import Modal from './Modal';

export default function Card({ data }) {

    let banner = data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.smallThumbnail;
    let price = data.saleInfo.saleability

    const [show, setShow] = useState({
        visibility: "hidden",
        opacity: 0,
    })

    const change = () => {
        setShow({
            visibility: "visible",
            opacity: 1,
        })
    }


    return (
        <div onClick={change} className='card'>
            <div className="card-content">
                <img src={banner} className='card-img' alt="" />
                <div className="card-bottom">
                    <p className="book-name"> {data.volumeInfo.title} </p>
                    <p className="price">
                        {price}
                    </p>
                </div>
            </div>
            <Modal show={show} data={data} />
        </div>
    )
}
