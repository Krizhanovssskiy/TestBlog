
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../img/sprite.svg';

import {
  ItemPost,
  BodyPost,
  RoundButton,
  SvgIcon,
  OpenButton } from './style_ListPosts';

const PostListItem = ({
                        item,
                        deletePost,
                        isOpen,
                        onDetailsPost,
                        onEditPost }) => {
  const openDetailsPost = () => onDetailsPost(item.id);
  const deletePostItem = (e) => {
    e.stopPropagation();
    deletePost(item.id)
  };

  const updateItemPost = (e) => {
    e.stopPropagation();
    onEditPost(item)
  };

  return(
    <ItemPost
      onClick={openDetailsPost}
    >
      <Link to={`/post/${item.id}`}>{item.name}</Link>
      <BodyPost>
        <h2>{item.title}</h2>
        {
          isOpen && (
            <Fragment>
              <RoundButton
                colorBgBorder={'#E52B50'}
                colorText={'#F7E7CE'}
                onClick={deletePostItem}
              >
                <SvgIcon>
                  <use xlinkHref={`${sprite}#icon-delete`} />
                </SvgIcon>
              </RoundButton>

              <RoundButton
                colorBgBorder={'#78866B'}
                colorText={'#FFFF99'}
                onClick={updateItemPost}
              >
                <SvgIcon>
                  <use xlinkHref={`${sprite}#icon-pencil`} />
                </SvgIcon>
              </RoundButton>
              <OpenButton
                colorBgBorder={'#03C03C'}
                colorText={'#FFA812'}
              >
                <Link to={`/post/${item.id}`}>
                  Open Post
                </Link>
              </OpenButton>
            </Fragment>
          )
        }
      </BodyPost>
      {
        isOpen && (
          <p>{item.body}</p>
        )
      }
    </ItemPost>
  )
};

export default PostListItem;