import React from 'react';
import _ from 'lodash';
import BlogItem from './Item';

const BlogList = (props) => {
  const arr = props.arr;

  return React.createElement(
    'ul',
    {},
    _.map(arr, (item) => (
        React.createElement(BlogItem, _.assign({ key: item.id, incrementLike: props.incrementLike },
           item)))
  ));
};

export default BlogList;
