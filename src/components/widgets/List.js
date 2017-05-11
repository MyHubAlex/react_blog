import { Item } from 'semantic-ui-react';
import React from 'react';
import { map, assign } from 'lodash';
import BlogItem from './Item';

const BlogList = (props) => {
  const arr = props.arr;
  return (<Item>
    {map(arr, (item) => {
      const newItem = assign({}, item, { key: item.id, incrementLike: props.incrementLike });
      return <BlogItem {...newItem} />;
    })}
  </Item>);
};

export default BlogList;
