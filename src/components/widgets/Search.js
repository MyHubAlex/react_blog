import React from 'react';
import { Input } from 'semantic-ui-react';

const Search = (props) => (
  <Input onInput={(e) => props.searchPosts(e.target.value)} />
);

export default Search;
