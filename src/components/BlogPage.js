import React from 'react';
import _ from 'lodash';
import request from 'superagent';

import BlogList from './widgets/List';
import PieChart from './widgets/PieChart';

const { bind } = _;

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.incrementLike = bind(this.incrementLike, this);
    }

   componentDidMount() {
     this.fetchPost();
   }

   fetchPost() {
     request.get(
       'http://localhost:3001',
       {},
       (err, res) => (this.setState({ list: res.body }))
     );
   }

   incrementLike(id) {
       const newList = _.map(this.state.list, (item) => {
         if (item.id === id) {
              item.likes += 1;
         }
         return item;
       });

       this.setState({ list: newList });
 }

  render() {
    const arr = _.map(this.state.list, (item) => [item.text, item.likes]);

    return React.createElement('div', {},
    <BlogList arr={this.state.list} incrementLike={this.incrementLike} />,
    <PieChart
      columns={
        arr
      }
    />);
  }
}

export default BlogPage;
