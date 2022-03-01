import React, {useState} from 'react';
import './header.css';

const Header = () => {
  const [data, setDate] = useState(1)
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li onClick={() => setDate(1)}>
          <a href="#">People</a>
        </li>
        <li onClick={() => setDate(2)}>
          <a href="#">Planets</a>
        </li>
        <li onClick={() => setDate(3)}>
          <a href="#">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export {Header};
