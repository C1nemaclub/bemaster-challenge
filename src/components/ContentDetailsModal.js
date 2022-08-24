import React from 'react';
import ReactDom from 'react-dom';
import '../styles/ContentDetailsModal/contentDetailsModal.scss';
import { FiX } from 'react-icons/fi';

export default function ContentDetailsModal(props) {
  const overlay_style = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.8)',
    zIndex: 1000,
  };

  if (!props.open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div style={overlay_style}>
        <div className='modal'>
          <div className='img-container'>
            <img src={props.contentDetail.image} alt='' />
          </div>
          <div className='modal-title'>{props.contentDetail.name}</div>
          <p className='modal-text'>{props.contentDetail.sinopsis}</p>
          <FiX className='x-icon icon' onClick={props.handleClick} />
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
