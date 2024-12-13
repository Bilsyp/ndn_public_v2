// ui/Container.js
import React from "react";

const Container = ({ title, children }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    boxSizing: "border-box",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  content: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#555",
    textAlign: "justify",
    margin: "0 20px",
  },
};

export default Container;
