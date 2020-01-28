
import React, { useState, useEffect } from 'react';
import { Button, Textarea } from "../styleComponent/style_PopupAddPost";
import { WrapperCommentList, ItemList } from './style_CommentsList';

const CommentsList = ({ postId, comments, addCommentPost }) => {
  const [ comment, setComment ] = useState('');
  useEffect(() => {

  }, [comments])

  const onChange = (e) => {
    setComment(e.target.value)
  };

  const onSaveComment = () => {
    if (comment === '') return;
    addCommentPost({
      id: postId,
      body: comment
    })
    setComment('');
  };
  return (
    <WrapperCommentList>
      <h4>Comments:</h4>
      <ul>
        {
          comments && comments.length !== 0 && (
            comments.map(comment => (
              <ItemList key={comment.id}>
                {
                  comment.body
                }
              </ItemList>
            ))
          )
        }
      </ul>

      <Textarea
        value={comment}
        onChange={onChange}
      />

      <Button
        theme={{main: 'green'}}
        colorText={'white'}
        onClick={onSaveComment}
      >
        Add Comment
      </Button>
    </WrapperCommentList>

  )
};

export default CommentsList;
