import React from 'react';
import '../styles/Card/card.scss';

export default function Card(props) {
  const recommended = props.recommended ? (
    <div className='recommended'>Recommended</div>
  ) : (
    ''
  );

  const featureElements = props.features.map((item, index) => {
    return (
      <div className='feature' key={index}>
        {item}
      </div>
    );
  });

  const style = {
    backgroundColor:
      props.type === 'Free'
        ? 'gray'
        : '' || props.type === 'Standard'
        ? 'green'
        : '' || props.type === 'Pro'
        ? 'dodgerblue'
        : '' || props.type === 'Premium'
        ? 'indigo'
        : '' || props.type === 'Deluxe'
        ? '#ED1D24'
        : '',
  };

  return (
    <div className='card'>
      <div className='top' style={style}>
        <div className='price'>
          <span className='tag'>{props.price}</span>
          <span className='month'>/mo</span>
        </div>
        <div className='type'>{props.type}</div>
      </div>
      <div className='bottom'>
        <div className='features'>{featureElements}</div>
        <button className='btn' onClick={props.handleClick} style={style}>
          Pick Plan
        </button>
      </div>
      {recommended}
    </div>
  );
}
