import React, { useState } from "react";

import axios from "axios";

import backgroundImage from "../images/register-bg.jpg";

function Register() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const registerUser = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "http://localhost:5000/api/register",

        {
          name,
          email,
          password
        }

      );

      alert(response.data.message);

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div style={styles.container}>

      <div style={styles.overlay}>

        <h1 style={styles.heading}>
          Register
        </h1>

        <form onSubmit={registerUser}>

          <input
            style={styles.input}
            type="text"
            placeholder="Enter Name"
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <br /><br />

          <input
            style={styles.input}
            type="email"
            placeholder="Enter Email"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <br /><br />

          <input
            style={styles.input}
            type="password"
            placeholder="Enter Password"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <br /><br />

          <button
            style={styles.button}
            type="submit"
          >
            Register
          </button>

        </form>

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

    textAlign: "center",

    width: "420px"

  },

  heading: {

    color: "#fff",

    marginBottom: "30px",

    fontSize: "40px"

  },

  input: {

    width: "100%",

    padding: "12px",

    borderRadius: "8px",

    border: "none",

    fontSize: "16px"

  },

  button: {

    width: "100%",

    padding: "12px",

    border: "none",

    borderRadius: "8px",

    backgroundColor: "#0984e3",

    color: "#fff",

    fontSize: "18px",

    cursor: "pointer"

  }

};

export default Register;
