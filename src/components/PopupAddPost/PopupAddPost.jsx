
import React from 'react';
import { connect } from 'react-redux';
import { popupHide, createPost } from "../../_actions";
import {
  WrapperPopup,
  PopupForm,
  Input,
  Textarea,
  BoxButton,
  Button } from '../styleComponent/style_PopupAddPost';


const PopupAddPost = ({
                        titlePost,
                        bodyPost,
                        onChange,
                        onCancel,
                        popupHide,
                        onSavePost }) => {
  const onStop = (e) => {
    e.stopPropagation();
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
            theme={{main: '#E32636'}}
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