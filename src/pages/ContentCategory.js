import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ContentDetailsModal from '../components/ContentDetailsModal';
import '../styles/ContentCategory/contentCategory.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function ContentCategory() {
  const { user, isLoading, isSuccess, isError, msg } = useSelector(
    (state) => state.login
  );

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
    if (!user) {
      console.log('Not logged in!');
      toast.error('You need to be logged in!');
      //navigate('/');
      return;
    }
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
