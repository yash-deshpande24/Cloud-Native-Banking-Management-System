import React from "react";

import backgroundImage from "../images/dashboard-bg.jpg";

function Dashboard() {

  return (

    <div style={styles.container}>

      <div style={styles.overlay}>

        <h1 style={styles.heading}>
          Banking Dashboard
        </h1>

        <p style={styles.welcome}>
          Welcome to Cloud Native Banking Platform
        </p>

        <div style={styles.cardContainer}>

          <div style={styles.card}>

            <h2>Total Balance</h2>

            <p>₹50,000</p>

          </div>

          <div style={styles.card}>

            <h2>Total Transactions</h2>

            <p>120</p>

          </div>

          <div style={styles.card}>

            <h2>Active Users</h2>

            <p>25</p>

          </div>

        </div>

      </div>

    </div>

  );
}

const styles = {

  container: {

    backgroundImage: `url(${backgroundImage})`,

    backgroundSize: "cover",

    backgroundPosition: "center",

    backgroundRepeat: "no-repeat",

    height: "100vh",

    display: "flex",

    justifyContent: "center",

    alignItems: "center"

  },

  overlay: {

    backgroundColor: "rgba(0,0,0,0.7)",

    padding: "50px",

    borderRadius: "15px",

    width: "80%",

    textAlign: "center"

  },

  heading: {

    color: "#fff",

    fontSize: "50px",

    marginBottom: "10px"

  },

  welcome: {

    color: "#fff",

    fontSize: "22px",

    marginBottom: "40px"

  },

  cardContainer: {

    display: "flex",

    justifyContent: "space-around",

    flexWrap: "wrap",

    gap: "20px"

  },

  card: {

    backgroundColor: "#ffffff",

    padding: "30px",

    borderRadius: "12px",

    width: "250px",

    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"

  }

};

export default Dashboard;
