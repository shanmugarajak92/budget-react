import React from 'react'
import { Statistic } from 'semantic-ui-react'

export default function DisplayBalance({value}) {
  return (
    <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  )
}
