import React, { Fragment } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

function EntryLine({
  id,
  description,
  value,
  isExpense,
  deleteEntry,
  editEntry,
}) {
  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column textAlign="left">{description}</Grid.Column>
            <Grid.Column>{value}</Grid.Column>
            <Grid.Column textAlign="center">
              <Icon name="edit" bordered onClick={() => editEntry(id)} />
              <Icon name="trash" bordered onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
}

export default EntryLine;
