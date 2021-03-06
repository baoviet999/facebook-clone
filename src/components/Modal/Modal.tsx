import React from 'react';
import './Modal.scss';

interface ModalProps {
    children?: React.ReactNode;
}

const Modal = ({ children } : ModalProps) => {
    return (
        <div className="modal">
            {children}
        </div>
    )
};

export default Modal;
