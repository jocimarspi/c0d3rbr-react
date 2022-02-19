import { Children } from 'react';
import './Card.css';

const Card = ({ title, children, color }) => {

  const style = {
    backgroundColor: color || '#FF5733',
    borderColor: color || '#FF5733'
  }
  return (
    <div className="card" style={style}>
      <div className="title">{title}</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Card;
