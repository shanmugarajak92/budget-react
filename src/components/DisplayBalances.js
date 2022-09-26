import React from "react";
import { Grid, Segment, Statistic } from "semantic-ui-react";

export default function DisplayBalances({ size }) {
  return (
    <Segment size={size} textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Statistic size="tiny" color="green">
              <Statistic.Label>Income</Statistic.Label>
              <Statistic.Value>$ 89,000.00</Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic size="tiny" color="red">
              <Statistic.Label>Expense</Statistic.Label>
              <Statistic.Value>$ 722.00</Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
