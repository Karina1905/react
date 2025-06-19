import {useState, useEffect} from 'react';
import UserContext from './UserContext';

function UserProvider({children}){
const [users, setUsers] = useState([]);

useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data))
   .catch(err => console.error("Error uploading users: ", err));
}, []);

return (
<UserContext value={users}>{children}</UserContext>
);

}export default UserProvider;