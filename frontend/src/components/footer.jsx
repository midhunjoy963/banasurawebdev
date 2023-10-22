import React from "react";
import { Container } from "react-bootstrap";
const footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Container
        style={{ position: "relative", bottom: 0 }}
        className="text-center py-3"
      >
        <p>Team Banasura &copy; {year}</p>
      </Container>
    </footer>
  );
};

export default footer;
