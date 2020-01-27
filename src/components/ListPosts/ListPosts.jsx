
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getAllPosts } from '../../_actions';

const ListPosts = ({ getAllPosts, listPosts }) => {

  useEffect(() => {
    getAllPosts()
  },[getAllPosts]);

  return (
    <ul>
      {
        listPosts.map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))
      }
    </ul>
  )
};

const mapStateToProps = ({ listPosts }) => ({
  listPosts
});

export default connect(
mapStateToProps,
  {
    getAllPosts
  }
)(ListPosts);