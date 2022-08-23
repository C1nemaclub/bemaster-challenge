import React from 'react';
import ReactDom from 'react-dom';

export default function ContentDetailsModal(props) {
  const overlay_style = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000,
  };

  if (!props.open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div style={overlay_style}>
        <div className='modal'>{props.contentDetail}</div>
        <button className='btn danger' onClick={props.handleClick}>
          Cancel
        </button>
      </div>
    </>,
    document.getElementById('portal')
  );
}
