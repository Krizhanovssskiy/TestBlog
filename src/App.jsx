import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import { popupShow } from './_actions';
import { Container } from './style_component';

const App = ({ children, popup, popupShow, popupHide }) => {


  return (
    <Container>
      <Header
        popupShow={popupShow}
      />
      {children}
    </Container>

  )
};

export default connect(
  null,
  {
    popupShow,

  }
)(App);