import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <React.Fragment>
      <Form.Group>
        <Form.Input
          placeholder="New thing"
          icon="tags"
          width={12}
          label="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          width={4}
          value={value}
          label="Value"
          onChange={(event) => setValue(parseInt(event.target.value))}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="Is Expense"
          checked={isExpense}
          onClick={() => {
            setIsExpense((oldState) => !oldState);
          }}
        />
      </Segment>
    </React.Fragment>
  );
}

export default EntryForm;
