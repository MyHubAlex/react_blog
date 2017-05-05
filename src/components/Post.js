import React, { PropTypes } from 'react';
import request from 'superagent';

import { Item } from 'semantic-ui-react';
import BlogItem from './widgets/Item';
//import list from '../constants/static/items';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
     this.fetchPost();
  }

 fetchPost() {
   request.get(
     `http://localhost:3001/${this.props.params.id}`,
     {},
     (err, res) => (this.setState({ item: res.body }))
   );
 }
  render() {
    const { item } = this.state;
    if (!item) return null;

    return (<Item.Group>
              <BlogItem {...item} />
            </Item.Group>);
    }
  }

Post.PropTypes = {
  params: PropTypes.object
};

export default Post;
