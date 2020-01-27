
import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../styleComponent/style_PopupAddPost';

const Header = ({ popupShow }) => {

  return (
    <div>
      <Link to='/'>
        List Posts
      </Link>

      <Button
        onClick={popupShow}
        theme={{main: 'darkblue'}}
        colorText={'white'}
      >
        Add Post
      </Button>
    </div>
  )
};

export default Header;