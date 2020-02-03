import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  TermsContainer,
  Text,
  StyledLink,
  Button
} from './DispatchContainerStyles';
import { setActiveValue } from '../../../store/dispatchContainer/actions';

interface Props {
  setActiveValue(val: boolean): void;
}

const WrappedDispatchContainer: React.FC<Props> = props => {
  const [val, setVal] = useState(false);

  return (
    <Container>
      <form>
        <TermsContainer>
          <input type="checkbox" onClick={() => setVal(!val)} />
          <Text>
            I agree to the
            <StyledLink to="/terms">Terms and Conditions</StyledLink>
          </Text>
        </TermsContainer>
        <Button
          type="button"
          onClick={() =>
            val ? props.setActiveValue(val) : alert('checkbox is required!!')
          }
        >
          DISPATCH
        </Button>
      </form>
    </Container>
  );
};

const mapDispatchToProps = {
  setActiveValue
};

const DispatchContainer = connect(
  null,
  mapDispatchToProps
)(WrappedDispatchContainer);

export default DispatchContainer;
