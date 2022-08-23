import React from 'react';

export default function Card(props) {
  const recommended = props.recommended ? (
    <div className='recommended'>Recommended</div>
  ) : (
    ''
  );

  return (
    <div className='card'>
      <div className='type'>{props.type}</div>
      <div className='price'>{props.price}</div>
      <div className='features'>{props.features}</div>
      <button className='btn' onClick={props.handleClick}>
        Pick Plan
      </button>
      {recommended}
    </div>
  );
}
