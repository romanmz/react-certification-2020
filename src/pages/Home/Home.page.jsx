import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <section>
      <h1>Hello stranger!</h1>
      <Link to="/login">let me in →</Link>
    </section>
  );
}

export default HomePage;
