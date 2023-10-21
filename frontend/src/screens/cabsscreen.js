import React from "react";
import Cabs from "../components/cabs.jsx";
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
};
const cabsscreen = () => {
  return (
    <div style={styles.container}>
      <Cabs></Cabs>
    </div>
  );
};

export default cabsscreen;
