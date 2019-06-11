import React from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.scss';

const cx = classNames.bind(styles);

const Modal = ({text}) => {
    return (
        <div>
            <button id="myBtn">Open Modal</button>
            <div id="myModal" className={cx("modal")}>
                <div className={cx("modal-content")}>
                    <span id="closeID" className="close">&times;</span>                                                               
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;