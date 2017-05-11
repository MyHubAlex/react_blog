import React from 'react';

const Like = (props) => (
  <div>
    <button onClick={() => props.incrementLike(props.id)}>
      Like
    </button>
    <div>
      {props.likes}
    </div>
  </div>
);
export default Like;
