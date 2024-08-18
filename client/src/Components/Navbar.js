import React, { useContext } from 'react';
import axios from 'axios';
import { CardContext } from './CardContext';
import './Styles/Navbar.css';

const Navbar = () => {
  const { updateCards } = useContext(CardContext);

  const createCard = async () => {
    const title = prompt('Enter Title: ');
    const description = prompt("Enter Description: ");
    const link = prompt("Enter Link: ");

    const cardDetails = { title, description, link };

    try {
      const response = await axios.post('http://localhost:5000/cards', cardDetails);
      alert("Card created successfully!");
      updateCards(response.data.card);
    } catch (error) {
      console.error("Error creating card:", error);
      alert("Failed to create card.");
    }
  };

  return (
    <div className='navbar'>
      <div className="left">
        <img src="abstract.png" alt="abstract" />
        <h3>Abstract</h3>
        <hr />
        <h3>Help Center</h3>
      </div>
      <button onClick={createCard}>Submit a request</button>
    </div>
  );
};

export default Navbar;
