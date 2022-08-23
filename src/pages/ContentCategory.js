import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ContentCategory() {
  const { state } = useLocation();
  const plan = state;
  const [content, setContent] = useState(plan.content);
  console.log(plan.content);

  const contentElements = content.map((item) => {
    return (
      <>
        <ul>
          <li>{item}</li>
        </ul>
      </>
    );
  });

  return (
    <>
      <div className='page content-page'>
        <h1>Content Category</h1>
        {contentElements}
        <button onClick='history.back()'>Go Back</button>
      </div>
    </>
  );
}
