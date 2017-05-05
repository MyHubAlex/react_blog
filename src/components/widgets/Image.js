import React from 'react';

const Image = (props) => (
  React.createElement('img',
                            { src: props.src,
                            width: props.width,
                            height: props.height,
                            alt: props.alt })
);

export default Image;
