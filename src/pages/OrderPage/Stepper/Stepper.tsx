import React from 'react';
import { StepperItemsInterface } from '../../../types/types';
import StepperItem from './StepperItem/StepperItem';
import { StepperList, StepperContainer } from './StepperStyles';

interface Props {
  stepItems: StepperItemsInterface[];
  activeStep?: number;
}

const Stepper: React.FC<Props> = ({ stepItems }) => {
  return (
    <StepperContainer>
      <StepperList>
        {stepItems.map(item => {
          return (
            <StepperItem key={item.id} title={item.title} icon={item.icon} />
          );
        })}
      </StepperList>
    </StepperContainer>
  );
};

export default Stepper;
