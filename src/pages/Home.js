import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import subscriptionPlans from '../subscriptionPlans';

export default function Home() {
  const [plans, setPlans] = useState(subscriptionPlans);

  const cardElements = plans.map((plan) => {
    return (
      <Card
        key={plan.id}
        type={plan.type}
        price={plan.price}
        features={plan.features}
        recommended={plan.recommended}
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
