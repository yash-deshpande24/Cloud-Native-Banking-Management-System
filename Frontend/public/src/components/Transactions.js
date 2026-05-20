import React from "react";

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
    }

  ];

  return (

    <div>

      <h2>Transactions</h2>

      {

        transactions.map((item) => (

          <div key={item.id}>

            <p>
              {item.type} : ₹{item.amount}
            </p>

          </div>

        ))

      }

    </div>

  );
}

export default Transactions;