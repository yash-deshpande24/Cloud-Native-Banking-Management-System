import React from "react";

import backgroundImage from "../images/banking-bg.jpg";

function Home() {

  return (

    <div style={styles.container}>

    </div>

  );
}

const styles = {

  container: {

    backgroundImage: `url(${backgroundImage})`,

    backgroundSize: "cover",

    backgroundPosition: "center",

    backgroundRepeat: "no-repeat",

    height: "90vh",

    width: "99%",

    margin: "0",

    padding: "0"

  }

};

export default Home;
