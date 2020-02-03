import React from 'react';
import {
  Icon,
  IconContainer,
  Line,
  StepperListItem,
  Title
} from './StepperItemStyles';
import { connect } from 'react-redux';

export interface Props {
  title: string;
  icon: string;
  active?: boolean;
}

const WrappedStepperItem: React.FC<Props> = props => {
  return (
    <StepperListItem {...props}>
      <Title {...props}>{props.title}</Title>
      <Line {...props} />
      <IconContainer {...props}>
        <Icon className={props.icon} />
      </IconContainer>
    </StepperListItem>
  );
};

const mapStateToProps = (state: any) => {
  return {
    active: state.active
  };
};

const StepperItem = connect(mapStateToProps, null)(WrappedStepperItem);

export default StepperItem;
