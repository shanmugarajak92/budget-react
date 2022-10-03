import React, { Fragment } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../actions/entries.actions";
import { openEditModal } from "../actions/modals.actions";

function EntryLine({ id, description, value, isExpense }) {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column textAlign="left">{description}</Grid.Column>
            <Grid.Column>{value}</Grid.Column>
            <Grid.Column textAlign="center">
              <Icon
                name="edit"
                bordered
                onClick={() => dispatch(openEditModal(id))}
              />
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(removeEntryRedux(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
}

export default EntryLine;
