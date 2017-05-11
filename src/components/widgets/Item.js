import React from 'react';
import Like from './Like';
import TextBox from './Text';
import Meta from './Meta';
import Image from './Image';
import Link from '../elements/Link';

const BlogItem = (props) => (
  <div>
    <Image {...props.data} />
    <Link to={`/posts/${props.id}`}>
      <TextBox>{props.text}</TextBox>
    </Link>
    <Meta {...props} />
    <Like {...props} />
  </div>
);

export default BlogItem;
