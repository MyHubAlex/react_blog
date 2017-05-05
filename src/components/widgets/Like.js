import React from 'react';

const Like = (props) => (

  React.createElement('div',
                      {},
                      React.createElement('button',
                                        { onClick: () => (props.incrementLike(props.id)) }, 'Like'),
                                      React.createElement('div', {}, `likes: ${props.likes}`))

);

export default Like;
