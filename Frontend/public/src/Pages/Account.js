import React from "react";

import backgroundImage from "../images/account-bg.jpg";

function Account() {

  return (

    <div style={styles.container}>

      <div style={styles.overlay}>

        <h1 style={styles.heading}>
          Account Details
        </h1>

        <div style={styles.card}>

          <p>
            <strong>Name:</strong>
            Yash Deshpande
          </p>

          <p>
            <strong>Account Number:</strong>
            1234567890
          </p>

          <p>
            <strong>IFSC Code:</strong>
            BANK000123
          </p>

          <p>
            <strong>Balance:</strong>
            ₹50,000
          </p>

          <p>
            <strong>Account Type:</strong>
            Savings Account
          </p>

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

    width: "500px",

    textAlign: "center"

  },

  heading: {

    color: "#fff",

    fontSize: "45px",

    marginBottom: "30px"

  },

  card: {

    backgroundColor: "#ffffff",

    padding: "30px",

    borderRadius: "12px",

    fontSize: "20px",

    lineHeight: "2"

  }

};

export default Account;
