import React from 'react';

const Meta = (props) => {
  const { author, createdAt, updatedAt } = props.meta;

  return (<div>
    <div>{author && `Автор: ${author}`}</div>
    <div>{createdAt && `Создана: ${createdAt}`}</div>
    <div>{updatedAt && `Отредактировано ${updatedAt}`}</div>
  </div>);
  };

export default Meta;
