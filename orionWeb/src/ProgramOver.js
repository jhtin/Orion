import React from 'react';
import { Icon, Card, Container, Grid, Header, Divider } from 'semantic-ui-react';
import ProgramOverFeed from './ProgramOverFeed';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class ProgramOver extends React.Component {
  state = {
    programname: "Local Governance Program"
  }
  render() {
    return (
      <Container>
        <Grid padded>
        <Grid.Row>
          <Header as='h1'>{this.state.programname}</Header>
        </Grid.Row>
        <Divider/>

        <Grid.Row>
          <Grid.Column width={6}>
        <Card>
          <Map refs='map' center={[0,100]} zoom={6}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          </Map>
          <Card.Content extra>
          <a>
            <Icon name='user' />
            200 Participants
          </a>
        </Card.Content>


        </Card>  
        </Grid.Column>
        <Grid.Column width={10}>
        More data here
        </Grid.Column>
  
      </Grid.Row>
        <Divider/>
        <Grid.Row>
          <Container>
          <ProgramOverFeed/>
          </Container>
        </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default ProgramOver;

//ReactDOM.render(<CustomTheme/>, mountNode)