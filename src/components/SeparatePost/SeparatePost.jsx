
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { retrieveDetailsPost, addCommentPost } from '../../_actions';
import CommentsList from '../CommentsList';

const SeparatePost = ({
                        match,
                        detailsPost,
                        retrieveDetailsPost,
                        addCommentPost }) => {
  const { params } = match;

  useEffect(() => {
    retrieveDetailsPost(params.id)
  });

  return (
    <div>
      <h1>{detailsPost.title}</h1>
      <p>{detailsPost.body}</p>

      <CommentsList
        postId={params.id}
        comments={detailsPost.comments}
        addCommentPost={addCommentPost}
      />
    </div>
  )
};

export default connect(
  ({detailsPost}) => ({
    detailsPost
  }),
  {
    retrieveDetailsPost,
    addCommentPost
  }
)(withRouter(SeparatePost));