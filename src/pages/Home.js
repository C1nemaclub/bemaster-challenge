import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import subscriptionPlans from '../subscriptionPlans';
import '../styles/Home/home.scss';
import { FaAngleRight } from 'react-icons/fa';

export default function Home() {
  const navigate = useNavigate();
  const [plans, setPlans] = useState(subscriptionPlans);

  function chosePlan(plan) {
    navigate(`/plan/${plan.type}`, { state: plan });
  }

  const cardElements = plans.map((plan) => {
    return (
      <Card
        key={plan.id}
        type={plan.type}
        price={plan.price}
        features={plan.features}
        recommended={plan.recommended}
        handleClick={() => chosePlan(plan)}
      />
    );
  });

  function scrollDown() {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  }

  return (
    <>
      <div className='page home-page'>
        <div className='content'>
          <div className='hero'>
            <h3>¡Hello to you once again!</h3>
            <h1 className='hero-text'>Start Watching The Best Content Now!</h1>
            <button className='btn plans-btn' onClick={scrollDown}>
              Subscriptions
              <FaAngleRight />
            </button>
          </div>
          <div className='plans'>
            <div className='card-container'>{cardElements}</div>
          </div>
        </div>
      </div>
    </>
  );
}
