import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ContentDetailsModal from '../components/ContentDetailsModal';

export default function ContentCategory() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const plan = state;
  const [content, setContent] = useState(plan.content);
  const [contentDetail, setContentDetail] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  console.log(plan.content);

  const contentElements = content.map((item) => {
    return (
      <>
        <ul>
          <li onClick={() => openModal(item.sinopsis)}>{item.name}</li>
        </ul>
      </>
    );
  });

  function openModal(sinopsis) {
    setIsOpen(true);
    setContentDetail(sinopsis);
  }

  return (
    <>
      <div className='page content-page'>
        <h1>Content Category</h1>
        {contentElements}
        <button onClick={() => navigate(-1)}>Go Back</button>
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
