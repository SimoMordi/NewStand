import { useState } from "react";

import "./App.css";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
