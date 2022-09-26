import "./style.css";
import Card from "../Card";

const List = ({ setListTransactions, listTransactions, listTransactionFiltered, setListTransactionFiltered }) =>
    listTransactionFiltered.length > 0
    ? listTransactionFiltered.map((element, index) => (
        <Card setListTransactionFiltered={setListTransactionFiltered} listTransactionFiltered={listTransactionFiltered}  transaction={element} key={index} setListTransactions={setListTransactions} listTransactions={listTransactions}/>
      ))
    : listTransactions.map((transaction, index) => (
        <Card setListTransactions={setListTransactions} listTransactions={listTransactions} transaction={transaction} key={index} />
      ));
;

export default List;
