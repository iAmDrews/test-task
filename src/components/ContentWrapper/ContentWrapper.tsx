import React from 'react';
import { StyledContentWrapper } from './ContentWrapperStyles';
import { Switch, Route } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';
import OrderPage from '../../pages/OrderPage/OrderPage';
import LocationPage from '../../pages/LocationPage/LocationPage';
import StatisticPage from '../../pages/StatisticPage/StatisticPage';
import PaymentsPage from '../../pages/PaymentsPage/PaymentsPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import SettingsPage from '../../pages/SettingsPage/SettingsPage';
import TermsPage from '../../pages/TermsPage/TermsPage';

const ContentWrapper = () => {
  return (
    <StyledContentWrapper>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/location" component={LocationPage} />
        <Route path="/statistic" component={StatisticPage} />
        <Route path="/payments" component={PaymentsPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/terms" component={TermsPage} />
      </Switch>
    </StyledContentWrapper>
  );
};

export default ContentWrapper;
