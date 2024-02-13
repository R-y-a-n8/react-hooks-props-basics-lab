import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// Import userData to access user information
import userData from "../data/user";

const App = () => {
  const bio = 'I made this';
  const { github, linkedin } = userData.social;

  return (
    <div>
      <NavBar />
      {/* Pass required props to Home component */}
      <Home
        name={userData.name}
        city={userData.city}
      />
      {/* Pass bio prop to About component */}
      <About
        bio={bio}
        github={github}
        linkedin={linkedin}
      />
    </div>
  );
}

export default App;

