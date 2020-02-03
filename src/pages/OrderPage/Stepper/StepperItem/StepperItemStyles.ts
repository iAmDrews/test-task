import styled from 'styled-components';
import { Props } from './StepperItem';

export const StepperListItem = styled.li`
  position: relative;
  height: 41px;
  width: ${(props: Props) => (props.icon !== 'icon-settings' ? '30%' : '10%')};
  display: flex;
  flex-direction: row;
`;

export const Title = styled.span`
  position: absolute;
  top: 0;
  ${(props: Props) =>
    props.icon !== 'icon-settings' ? 'right: 10%' : 'left: 0'};
  color: ${(props: Props) =>
    props.icon === 'icon-flag' ? '#8c8a86' : '#00b7bd'};
  ${(props: Props) =>
    props.icon === 'icon-flag' && props.active ? 'color: #00b7bd' : ''};
  @media (max-width: 1089px) {
    ${(props: Props) =>
      props.icon !== 'icon-settings' ? 'right: 15%' : 'left: 0'};
  }
  @media (max-width: 785px) {
    ${(props: Props) =>
      props.icon !== 'icon-settings' ? 'right: 20%' : 'left: 0'};
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 60%;
  left: 0;
  width: ${(props: Props) => (props.icon !== 'icon-settings' ? '92%' : '80%')};
  border-bottom: ${(props: Props) =>
    props.icon === 'icon-flag' ? '2px solid #8c8a86' : '2px solid #00b7bd'};
  ${(props: Props) =>
    props.icon === 'icon-flag' && props.active
      ? 'border-bottom: 2px solid #00b7bd'
      : ''};
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  ${(props: Props) =>
    props.icon === 'icon-box'
      ? 'background-color: #fff;\n color: #8c8a86;\n border 2px solid #00b7bd;'
      : props.icon === 'icon-flag'
      ? 'background-color: #fff;\n color: #8c8a86;\n \n border 2px solid #8c8a86;'
      : 'background-color: #00b7bd;\n color: #fff;\n border 2px solid #00b7bd;'}
  ${(props: Props) =>
    props.icon === 'icon-box' && props.active
      ? 'background-color: #00b7bd;\n color: #fff;\n border 2px solid #00b7bd;'
      : ''}
  ${(props: Props) =>
    props.icon === 'icon-flag' && props.active
      ? 'background-color: #00b7bd;\n color: #fff;\n border 2px solid #00b7bd;'
      : ''}
`;

export const Icon = styled.i`
  position: absolute;
  font-size: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
