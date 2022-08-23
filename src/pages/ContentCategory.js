import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ContentDetailsModal from '../components/ContentDetailsModal';
import '../styles/ContentCategory/contentCategory.scss';

export default function ContentCategory() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const plan = state;
  const [content, setContent] = useState(plan.content);
  const [contentDetail, setContentDetail] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const contentElements = content.map((item) => {
    return (
      <>
        <ul className='content-list'>
          <li className='content-list-item' onClick={() => openModal(item)}>
            {item.name}
          </li>
        </ul>
      </>
    );
  });

  function openModal(listiteminfo) {
    console.log(listiteminfo);

    setIsOpen(true);
    setContentDetail(listiteminfo);
  }

  return (
    <>
      <div className='page content-page'>
        <div className='content'>
          <h1 className='content-title'>{plan.type} Package</h1>
          {contentElements}
          <div className='btns'>
            <button className='btn btn-sub'>Subscribe</button>
            <button onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
      </div>
      <ContentDetailsModal
        open={isOpen}
        handleClick={() => setIsOpen(false)}
        data={content}
        contentDetail={contentDetail}
      />
    </>
  );
}
