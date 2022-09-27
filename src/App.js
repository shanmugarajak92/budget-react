import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EnteryLines from "./components/EnterLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  var initialEntries = [
    {
      id: 1,
      description: "Work Income",
      value: 1000.0,
      isExpense: false,
      color: "green",
    },
    {
      id: 2,
      description: "Groceries",
      value: 100.0,
      isExpense: true,
      color: "red",
    },
    {
      id: 3,
      description: "Power Bill",
      value: 150.0,
      isExpense: true,
      color: "red",
    },
    {
      id: 4,
      description: "Water Bill",
      value: 50.0,
      isExpense: true,
      color: "red",
    },
  ];
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState();
  const [value, setValue] = useState();
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncome, setTotalIncome] = useState();
  const [totalExpense, setTotalExpense] = useState();
  const [total, setTotal] = useState();

  function deleteEntryHandler(id) {
    const result = entries.filter((e) => e.id !== id);
    setEntries(result);
  }

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description: description,
      value: value,
      isExpense: isExpense,
    });
    setEntries(result);
  }

  function editEntry(id) {
    if (id) {
      const val = entries.find((e) => e.id === id);
      setEntryId(id);
      setDescription(val.description);
      setIsExpense(val.isExpense);
      setValue(val.value);
      setIsOpen(true);
    }
  }

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((e) => e.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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

  function resetEntry() {
    setDescription("");
    setIsExpense(true);
    setValue("");
  }

  return (
    <Container>
      <MainHeader type="h1" />
      <DisplayBalance value={total} />
      <DisplayBalances
        size="tiny"
        income={totalIncome}
        expense={totalExpense}
      />
      <MainHeader type="h3" title="History" />
      <EnteryLines
        entries={entries}
        deleteEntry={deleteEntryHandler}
        editEntry={editEntry}
      />
      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />

      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;
