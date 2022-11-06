import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Users from "../components/Users";

const Home = () => {
  return (
    <div>
      <ErrorBoundary>

      <Users />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
