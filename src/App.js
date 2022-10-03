import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EnteryLines from "./components/EnterLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntries } from "./actions/entries.actions";

function App() {
  //const [isOpen, setIsOpen] = useState(false);
  const [totalIncome, setTotalIncome] = useState();
  const [totalExpense, setTotalExpense] = useState();
  const [total, setTotal] = useState();
  const [entry, setEntry] = useState();
  const { isOpen, id } = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    const index = entries.findIndex((e) => e.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpense = 0;
    entries.map((e) => {
      if (e.isExpense) {
        return (totalExpense += e.value);
      }
      return (totalIncomes += e.value);
    });
    setTotalIncome(totalIncomes);
    setTotalExpense(totalExpense);
    setTotal(totalIncomes - totalExpense);
  }, [entries]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Container>
        <MainHeader type="h1" />
        <DisplayBalance value={isNaN(total) ? 0 : total} />
        <DisplayBalances
          size="tiny"
          income={totalIncome}
          expense={totalExpense}
        />
        <MainHeader type="h3" title="History" />
        <EnteryLines entries={entries} />
        <MainHeader type="h3" title="Add new transaction" />
        <NewEntryForm />

        <ModalEdit isOpen={isOpen} {...entry} />
      </Container>
    </React.Fragment>
  );
}

export default App;
