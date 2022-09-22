import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>100</Statistic.Value>
      </Statistic>
      <Segment size="tiny" textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label>Income</Statistic.Label>
                <Statistic.Value>89,000.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label>Expense</Statistic.Label>
                <Statistic.Value>722.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column textAlign="left">
              something
            </Grid.Column>
            <Grid.Column>
              $20.00
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column textAlign="left">
              something else
            </Grid.Column>
            <Grid.Column>
              $120.00
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input placeholder='New thing' icon='tags' width={12} label="Description"/>
          <Form.Input placeholder='100.00' icon='dollar' iconPosition="left" width={4} label='Value' />
        </Form.Group>
        <Button.Group style={{marginTop:20}}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
