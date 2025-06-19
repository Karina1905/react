import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import { useState } from 'react';

function App() {
 const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="py-4">
      <h1 className="text-center mb-4">Users</h1>
      <SearchBar onSearch={setSearchTerm}/>
      <UserList searchTerm={searchTerm}/>
    </div>
  )
}

export default App;
