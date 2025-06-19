import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchName, setSearchName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchName.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="m-5">
      <div className="mb-3">
        <label htmlFor="searchInput" className="form-label">
          Пошук за іменем
        </label>
        <input
          type="text"                    
          className="form-control"
          id="searchInput"
          value={searchName}             
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Введи імʼя користувача"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Пошук
      </button>
    </form>
  );
};

export default SearchBar;
