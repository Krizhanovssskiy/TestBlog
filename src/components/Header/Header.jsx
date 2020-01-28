
import React from 'react';
import {Link} from 'react-router-dom';
import { Button, BoxButton } from '../styleComponent/style_PopupAddPost';

const Header = ({ popupShow }) => {

  return (
    <BoxButton>
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
    </BoxButton>
  )
};

export default Header;