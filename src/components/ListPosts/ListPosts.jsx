
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PostListItem from './PostListItem';
import PopupAddPost from "../PopupAddPost";
import {
  popupShow,
  popupHide,
  getAllPosts,
  deletePost,
  updatePost,
  createPost } from '../../_actions';


const ListPosts = ({
                     popup,
                     listPosts,
                     getAllPosts,
                     createPost,
                     deletePost,
                     updatePost,
                     popupShow,
                     popupHide }) => {

  const [detailsPostId, setDetailsPostId] = useState(false);
  const [ titlePost, setTitlePost ] = useState('');
  const [ bodyPost, setBodyPost ] = useState('');

  const onEditPost = (item) => {
    setDetailsPostId(item.id);
    setTitlePost(item.title);
    setBodyPost(item.body);
    popupShow();
  };

  const onSavePost = (e) => {
    e.preventDefault();

    if (titlePost === '') return
    if (detailsPostId) {
      updatePost({
        id: detailsPostId,
        title: titlePost,
        body: bodyPost
      })
    } else {
      createPost({
        title: titlePost,
        body: bodyPost
      });
    }
    popupHide();
    setTitlePost('');
    setBodyPost('');
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

  useEffect(() => {
    getAllPosts();
  },[getAllPosts, listPosts]);

  const onDetailsPost = (id) => {
    if (id === detailsPostId) {
      setDetailsPostId(false);
      return;
    }
    setDetailsPostId(id);
  };

  return (
    <div>
      <ul>
        {
          listPosts.map(item => {
            return(
              <PostListItem
                key={item.id}
                item={item}
                onDetailsPost={onDetailsPost}
                isOpen={detailsPostId === item.id}
                deletePost={deletePost}
                onEditPost={onEditPost}
                openPopup={popupShow}
              />
            )})
        }
      </ul>

      {
        popup && (
          <PopupAddPost
            titlePost={titlePost}
            bodyPost={bodyPost}
            onChange={onChange}
            onCancel={onCancel}
            popupHide={popupHide}
            onSavePost={onSavePost}
          />
        )
      }
    </div>

  )
};

const mapStateToProps = ({ popup, listPosts }) => ({
  popup,
  listPosts
});

export default connect(
  mapStateToProps,
  {
    popupShow,
    popupHide,
    getAllPosts,
    deletePost,
    updatePost,
    createPost
  }
)(ListPosts);