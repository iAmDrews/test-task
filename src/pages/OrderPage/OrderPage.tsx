import React from 'react';
import Stepper from './Stepper/Stepper';
import { StepperItemsInterface } from '../../types/types';
import { Container } from './OrderPageStyles';
import DispatchContainer from './DispatchContainer/DispatchContainer';

const stepItems: StepperItemsInterface[] = [
  {
    id: 1,
    title: '1. Step',
    icon: 'icon-settings'
  },
  {
    id: 2,
    title: '2. Step',
    icon: 'icon-car'
  },
  {
    id: 3,
    title: '3. Step',
    icon: 'icon-box'
  },
  {
    id: 4,
    title: '4. Step',
    icon: 'icon-flag'
  }
];

const OrderPage = () => {
  return (
    <React.Fragment>
      <Stepper stepItems={stepItems} activeStep={1} />
      <Container />
      <DispatchContainer />
    </React.Fragment>
  );
};

export default OrderPage;
