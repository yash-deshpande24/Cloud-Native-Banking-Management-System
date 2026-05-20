import React from "react";

import backgroundImage from "../images/transactions-bg.jpg";

function Transactions() {

  const transactions = [

    {
      id: 1,
      amount: 5000,
      type: "Credit"
    },

    {
      id: 2,
      amount: 2000,
      type: "Debit"
    },

    {
      id: 3,
      amount: 7000,
      type: "Credit"
    }

  ];

  return (

    <div style={styles.container}>

      <div style={styles.overlay}>

        <h1 style={styles.heading}>
          Transactions
        </h1>

        <div style={styles.cardContainer}>

          {

            transactions.map((item) => (

              <div
                key={item.id}
                style={styles.card}
              >

                <h2>
                  {item.type}
                </h2>

                <p>
                  Amount: ₹{item.amount}
                </p>

              </div>

            ))

          }

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

    marginBottom: "40px"

  },

  cardContainer: {

    display: "flex",

    justifyContent: "center",

    gap: "20px",

    flexWrap: "wrap"

  },

  card: {

    backgroundColor: "#ffffff",

    padding: "30px",

    width: "250px",

    borderRadius: "12px",

    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"

  }

};

export default Transactions;
