// import { UserContext } from "../contexts/UserContext";

const userCard = ({user}) => {
    return (
 <div
      className="card text-bg-light mb-3"
      style={{ maxWidth: '18rem' }}
    >
  <div className="card-header"></div>
  <div className="card-body">
    <h5 className="card-title">{user.name}</h5>
    <p className="card-text">
        Email: {user.email}<br/>
        Phone: {user.phone}<br/>
        City: {user.address.city}<br/>
       Company: {user.company.name}<br/>
    </p>
  </div>
</div> );
}
 
export default userCard;