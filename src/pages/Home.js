import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import subscriptionPlans from '../subscriptionPlans';
import '../styles/Home/home.scss';

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

  return (
    <>
      <div className='page home-page'>
        <div className='card-container'>{cardElements}</div>
      </div>
    </>
  );
}
