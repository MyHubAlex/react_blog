import BlogPage from '../components/BlogPage';
import MainLayout from '../components/layouts/MainLayout';
import Post from '../components/Post';

const Index = {
  path: '/',
  components: BlogPage
};

const PostRoute = {
  path: '/posts/:id',
  component: Post
};

export default {
  components: MainLayout,
  childRoutes: [Index, PostRoute]
};
