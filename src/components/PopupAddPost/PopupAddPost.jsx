
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { popupHide, createPost } from "../../_actions";
import {
  WrapperPopup,
  PopupForm,
  Input,
  Textarea,
  BoxButton,
  Button } from '../styleComponent/style_PopupAddPost';


const PopupAddPost = ({popupHide, createPost}) => {

  const [ titlePost, setTitlePost ] = useState('');
  const [ bodyPost, setBodyPost ] = useState('');

  const onStop = (e) => {
    e.stopPropagation();
  };

  const onSavePost = (e) => {
    e.preventDefault();
    console.log(titlePost, bodyPost);
    createPost({titlePost, bodyPost})
  };

  const onChange = (name) => (e) => {
    if (name === 'title') {
      setTitlePost(e.target.value);
    } else if (name === 'body') {
      setBodyPost(e.target.value);
    }
  };
  const onCancel = () => {
    setTitlePost('');
    setBodyPost('');
    popupHide();
  };

  return (
    <WrapperPopup onClick={popupHide}>
      <PopupForm
        onClick={onStop}
        onSubmit={onSavePost}
      >
        <Input
          onChange={onChange('title')}
          value={titlePost}
          placeholder='title post'
          type='text'
        />

        <Textarea
          value={bodyPost}
          onChange={onChange('body')}
          placeholder='text'
        />

        <BoxButton>
          <Button
            theme={{main: 'red'}}
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button
            theme={{main: 'green'}}
            onClick={onSavePost}
          >
            Save
          </Button>
        </BoxButton>


      </PopupForm>
    </WrapperPopup>
  )
};

export default connect(
  null,
  {
    popupHide,
    createPost
  }
)(PopupAddPost);