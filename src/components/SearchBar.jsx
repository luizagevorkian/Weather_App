import { useState } from "react";

const SearchBar = ({ city, setCity, onSearch }) => {
  const [value, setValue] = useState(city);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCity(value);
    onSearch();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;