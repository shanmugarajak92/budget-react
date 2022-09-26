import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  return (
    <Container>
      <MainHeader type="h1" />
      <DisplayBalance value="100.00" />
      <DisplayBalances size="tiny" />

      <MainHeader type="h3" title="History" />
      <EntryLine description="Buy foods" value="$ 20.00" color="red" />
      <EntryLine description="Got tips" value="$ 10.00" color="green" />
      <EntryLine description="Bought banana" value="$ 2.00" color="red" />
      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
