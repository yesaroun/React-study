import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>
        <Link to='/count' className="btn">go count page</Link>
      </h1>
      <Link to='/todo' className="btn">go todo page</Link>
      <Link to='/booklist' className="btn">go booklist page</Link>
      <Link to='/users' className="btn">go users page</Link>
      <Link to='/movies' className="btn">go movies page</Link>
    </div>
  )
}

export default Home;