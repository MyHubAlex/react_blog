import React from 'react';

const Text = ({ name, value, onChange, label }) => (
  <div className="ui field">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      className="ui input"
      type="text"
      value={value}
      onChange={onChange}
    />
    </div>
);

export default Text;
