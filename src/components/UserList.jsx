import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import UserCard from "./UserCard";

const UserList = ({searchTerm}) => {
    const users = useContext(UserContext);
    const filtered = users.filter((e)=>e.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return ( 
    <div className="container">
        <div className="row">{filtered.map((user)=>(
            <div key={user.id} className="col-sm-6 col-md-4 col-lg-3"> <UserCard user={user} /></div>
        ))}</div>
</div> );
}
 
export default UserList;