import './Styles/Hero.css';
import { SearchContext } from './SearchContext';
import { useContext, useState, useEffect } from 'react';

const Hero = () => {
  const [search, setSearch] = useState(''); 
  
  const { setSearchQuery } = useContext(SearchContext);
  
  


  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchQuery(search); 
    }, 500); 

    return () => {
      clearTimeout(timerId);
    };
  }, [search, setSearchQuery]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };



  return (
    <div className="hero">
      <h1>How can we help?</h1>
      <input type="text" placeholder="Search" value={search} onChange={handleInput}/>
      <i className='bx bx-right-arrow-alt'></i>
    </div>
  );
};

export default Hero;
