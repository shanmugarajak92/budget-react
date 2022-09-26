import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine({description, value, color}) {
  return (
    <Segment color={color}>
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column textAlign="left">
         {description}
        </Grid.Column>
        <Grid.Column>
          {value}
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Icon name="edit" bordered/>
          <Icon name="trash" bordered/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Segment>
  )
}

export default EntryLine