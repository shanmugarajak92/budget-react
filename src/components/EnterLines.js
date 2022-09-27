import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EnteryLines({ entries, deleteEntry, editEntry }) {
  return (
    <Container>
      {entries.map((entry) => {
        return (
          <EntryLine
            key={entry.id}
            {...entry}
            deleteEntry={deleteEntry}
            editEntry={editEntry}
          />
        );
      })}
    </Container>
  );
}

export default EnteryLines;
