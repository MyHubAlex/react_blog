import _ from 'lodash';
import React from 'react';
import Like from './Like';
import TextBox from './Text';
import Meta from './Meta';
import Image from './Image';
import Link from '../elements/Link';

const { assign } = _;


const BlogItem = (props) => (

React.createElement('div',
 {},
                          React.createElement(Image, props.data),
                          React.createElement(Link, { to: `/posts/${props.id}` },
                             React.createElement(TextBox, {}, props.text)),
                          React.createElement(Meta, assign({}, props)),
                          React.createElement(Like, assign({}, props)))
);

export default BlogItem;
