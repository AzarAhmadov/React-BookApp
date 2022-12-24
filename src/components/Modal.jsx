import React, { useRef } from 'react';
import { BsXLg } from "react-icons/bs";

const Modal = ({ show, onClose, data }) => {
    const modal = useRef()
    const content = useRef()

    const remove = () => {
        modal.current.classList.add('remove')
    }

    let thumbnail = data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.smallThumbnail;

    return (
        <div ref={modal} style={show} className='modal'>
            <div className="modal-container">
                <div className="modal-content">
                    <div className="modal-top">
                        <img src={thumbnail} alt="" />
                        <div className="modal-btm">
                            <p className="modal-title">
                                {data.volumeInfo.title}
                            </p>
                            <p className="autor">
                                " {data.volumeInfo.authors} "
                            </p>
                            <div ref={content} className="content">
                                <p>
                                    {
                                        data.volumeInfo.description
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={remove} className="close-btn">
                    <BsXLg />
                </div>
            </div>

        </div>
    );
}

export default Modal;
