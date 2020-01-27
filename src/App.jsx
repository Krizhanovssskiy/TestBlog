import React, {Fragment} from 'react';
import Header from './components/Header';

const App = ({ children }) => {

  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>

  )
};

export default App;