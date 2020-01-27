import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import PopupAddPost from './components/PopupAddPost';
import { popupShow } from './_actions';

const App = ({ children, popup, popupShow }) => {

  return (
    <Fragment>
      <Header
        popupShow={popupShow}
      />
      {children}

      {
        popup && (
            <PopupAddPost />
          )
      }

    </Fragment>

  )
};

export default connect(
  ({popup}) => ({
    popup
  }),
  {
    popupShow,
  }
)(App);