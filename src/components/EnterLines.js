import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EnteryLines({ entries }) {
  return (
    <Container>
      {entries.map((entry) => {
        return <EntryLine key={entry.id} {...entry} />;
      })}
    </Container>
  );
}

export default EnteryLines;
