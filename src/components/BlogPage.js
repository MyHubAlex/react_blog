import React from 'react';
import _ from 'lodash';
import Helmet from 'react-helmet';

import BlogList from './widgets/List';
import PieChart from './widgets/PieChart';
import Search from './widgets/Search';

const BlogPage = (props) => {
  const arr = _.map(props.list, (item) => [item.text, item.likes]);

  return (<div>
    <Search searchPosts={props.searchPosts} />
    <BlogList arr={props.list} incrementLike={props.incrementLike} />
    <PieChart
        columns={
          arr
        }
    />
    <Helmet title={'Список постов'} />
  </div>);
};

export default BlogPage;
