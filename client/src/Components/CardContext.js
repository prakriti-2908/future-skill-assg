import  { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cards');
      setCards(response.data.allCards);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchCards(); 
  }, []);

  const updateCards = (newCard) => {
    setCards(prevCards => [newCard, ...prevCards]); 
  };

  return (
    <CardContext.Provider value={{ cards, updateCards }}>
      {children}
    </CardContext.Provider>
  );
};
