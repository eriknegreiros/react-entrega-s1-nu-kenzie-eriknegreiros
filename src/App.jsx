import { useState } from "react";
import Index from "./components/Index";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import NoCard from "./components/NoCard";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <div className="all">
      <div className="semi">
        <Header setIsLoggedIn={setIsLoggedIn} />
        <Form/>
        <TotalMoney/>
      </div>
      <div className="list">
        <List />
        <NoCard/>
      </div>
    </div>
  ) : (
    <Index setIsLoggedIn={setIsLoggedIn} />
  );
}

export default App;
