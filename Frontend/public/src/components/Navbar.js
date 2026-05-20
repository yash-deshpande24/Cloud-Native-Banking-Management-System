import React from "react";

import { Link } from "react-router-dom";

import logo from "../images/logo.png";

function Navbar() {

  return (

    <nav style={styles.nav}>

      <div style={styles.logoContainer}>

        <img
          src={logo}
          alt="logo"
          style={styles.logo}
        />

        <h2 style={styles.title}>
          Banking App
        </h2>

      </div>

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

    alignItems: "center",

    padding: "15px 30px",

    background: "#111",

    color: "#fff"

  },

  logoContainer: {

    display: "flex",

    alignItems: "center"

  },

  logo: {

    width: "45px",

    height: "45px",

    marginRight: "12px",

    borderRadius: "50%"

  },

  title: {

    fontSize: "32px"

  },

  link: {

    marginRight: "20px",

    color: "#fff",

    textDecoration: "none",

    fontSize: "18px",

    fontWeight: "bold"

  }

};

export default Navbar;
