import "./index.css";

const CardItem = (props) => {
  const { itemDetails } = props;
  const { id, firstName, avatar } = itemDetails;
  return (
    <li className="card-container">
      <p className="id-item">{id}</p>
      <div className="card-item">
        <img src={avatar} className="avatar-image" alt={firstName} />
      </div>
      <p className="title">{firstName}</p>
    </li>
  );
};

export default CardItem;
