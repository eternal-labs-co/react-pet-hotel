import React from "react";
import { Link } from "wouter";
import PetList from "./PetList";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          TODO: Display pets, their favorite toys, and owner, or a not enough
          permissions message
        </div>
      </div>
    </div>
  );
}

export default HomePage;
