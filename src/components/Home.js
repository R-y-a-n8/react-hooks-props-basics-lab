// Home.js
import React from 'react';

function Home(props) {
  return (
    <div>
      <h2>Welcome, {props.name} from {props.city}</h2>
    </div>
  );
}

export default Home;

