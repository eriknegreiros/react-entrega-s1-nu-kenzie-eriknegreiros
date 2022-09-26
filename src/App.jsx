import { useState } from "react";
import Index from "./components/Index";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import Button from "./components/Button";
import NoCard from "./components/NoCard";

import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [listTransactions, setListTransactions] = useState([]);

  const [listTransactionFiltered, setListTransactionFiltered] = useState([]);

  return isLoggedIn ? (
    <div className="all">
      <div className="semi">
        <Header setIsLoggedIn={setIsLoggedIn} />
        <Form
          listTransaction={listTransactions}
          setListTransactions={setListTransactions}
        />
        <TotalMoney listTransactions={listTransactions} />
      </div>
      <div className="list">
        <Button
          listTransaction={listTransactions}
          setListTransactionFiltered={setListTransactionFiltered}
          listTransactionFiltered={listTransactionFiltered}
        />

        {listTransactions.length === 0 ? (
          <NoCard />
        ) : (
          <List
            listTransactions={listTransactions}
            listTransactionFiltered={listTransactionFiltered}
            setListTransactionFiltered={setListTransactionFiltered}
            setListTransactions={setListTransactions}
          />
        )}
      </div>
    </div>
  ) : (
    <Index setIsLoggedIn={setIsLoggedIn} />
  );
}

export default App;
