import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Item } from 'semantic-ui-react';
import BlogItem from './widgets/Item';
import Helmet from 'react-helmet';

const Post = (props) => {
  console.log('post');
  const item = props.item;
  if (!item) return null;

  const itemAp = _.assign({}, item, { incrementLike: props.incrementLike });

  return (<Item.Group>
            <BlogItem {...itemAp} />
          <Helmet title={`Пост ${itemAp.text}`} />
          </Item.Group>);
};


Post.PropTypes = {
  params: PropTypes.object
};

export default Post;
