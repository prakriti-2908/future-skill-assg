import React from 'react';
import './Styles/Element.css';

const Element = ({ title, description, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="element">
      <div className="title-div" onClick={handleClick}>
        <h2 className="title">{title}</h2>
      </div>
      <div className="desc-div" onClick={handleClick}>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Element;

