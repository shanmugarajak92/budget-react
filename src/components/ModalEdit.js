import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModalEdit({
  isOpen,
  setIsOpen,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <EntryForm
            description={description}
            value={value}
            isExpense={isExpense}
            setDescription={setDescription}
            setValue={setValue}
            setIsExpense={setIsExpense}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)} content="Cancel" />
        <Button onClick={() => setIsOpen(false)} content="Ok" primary />
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
