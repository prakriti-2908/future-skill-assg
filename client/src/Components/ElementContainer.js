import React, { useContext } from 'react';
import Element from './Element';
import './Styles/ElementContainer.css';
import { CardContext } from './CardContext';
import { SearchContext } from './SearchContext';

const ElementContainer = () => {
  const { cards } = useContext(CardContext);
  const { searchQuery } = useContext(SearchContext);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
 
  return (
    <div className="element-container">
      {filteredCards.map((card, index) => (
        <Element
          key={index}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default ElementContainer;
