import React from 'react';

const Meta = (props) => {
  const { author, createdAt, updatedAt } = props.meta;

  return React.createElement('div', {},
                            [React.createElement(
                              'div', {}, author && `Автор: ${author}`
                            ), React.createElement(
                              'div', {}, createdAt && `Создана: ${createdAt}`),
                               React.createElement('div',
                              {},
                              updatedAt && `Отредактировано ${updatedAt}`)]);
};

export default Meta;
