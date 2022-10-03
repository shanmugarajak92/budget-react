import React from "react";
import { Statistic } from "semantic-ui-react";

export default function DisplayBalance({ value }) {
  return (
    <Statistic size="small">
      <Statistic.Label>Your Balance:</Statistic.Label>
      <Statistic.Value>{isNaN(value) ? 0 : value}</Statistic.Value>
    </Statistic>
  );
}
