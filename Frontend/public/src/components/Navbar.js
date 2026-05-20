```javascript
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav style={styles.nav}>

      <h2>Banking App</h2>

      <div>

        <Link style={styles.link} to="/">
          Home
        </Link>

        <Link style={styles.link} to="/login">
          Login
        </Link>

        <Link style={styles.link} to="/register">
          Register
        </Link>

        <Link style={styles.link} to="/dashboard">
          Dashboard
        </Link>

      </div>

    </nav>

  );
}

const styles = {

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#222",
    color: "#fff"
  },

  link: {
    marginRight: "15px",
    color: "#fff",
    textDecoration: "none"
  }

};

export default Navbar;
```
