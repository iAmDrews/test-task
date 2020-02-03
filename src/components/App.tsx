import React from 'react';
import { MainContainer } from './AppStyles';
import Header from './Header/Header';
import MenuContainer from './MenuContainer/MenuContainer';
import ContentWrapper from './ContentWrapper/ContentWrapper';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MainContainer>
        <MenuContainer />
        <ContentWrapper />
      </MainContainer>
    </React.Fragment>
  );
};

export default App;
