import { useState } from "react";
const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(query)
    }
    return (
        <form className="d-flex justify-content-center mb-4 gap-3" onSubmit={handleSubmit}>
            <input
             type="text"
             placeholder="Введіть місто"
             value={query}
             onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">Пошук</button>
        </form>
     );
}
 
export default SearchBar;