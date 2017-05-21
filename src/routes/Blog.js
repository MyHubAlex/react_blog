import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import Contacts from 'components/views/Contacts';
import EditPost from 'components/views/Edit';
import AddPost from '../containers/AddPostContainer';
import initialLoad from 'helpers/initialLoad';
import BlogPage from '../containers/BlogPageContainer';
import MainLayout from '../components/layouts/MainLayout';
import Post from '../containers/PostContainer';


const Index = {
  path: '/',
  components: BlogPage,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: '/posts/:id',
  component: Post,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchPost(params.id));
  }
};

const ContactsRoute = {
  path: '/contacts',
  component: Contacts
};

const EditRouter = {
  path: '/edit/post/:id',
  component: EditPost,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchPost(params.id));
  }
};

const AddPostRouter = {
  path: '/add',
  component: AddPost
};

export default {
  components: MainLayout,
  childRoutes: [Index, PostRoute, ContactsRoute, EditRouter, AddPostRouter]
};
