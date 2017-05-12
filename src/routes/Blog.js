import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import BlogPage from '../containers/BlogPageContainer';
import MainLayout from '../components/layouts/MainLayout';
import Post from '../containers/PostContainer';

const Index = {
  path: '/',
  components: BlogPage,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: '/posts/:id',
  component: Post,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

export default {
  components: MainLayout,
  childRoutes: [Index, PostRoute]
};
