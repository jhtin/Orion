import React from 'react';
import { Image, Icon, Card, Container, Grid, Header, Divider } from 'semantic-ui-react';
import ProfileGraph from './ProfileGraph';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class ProgramProfile extends React.Component {
  state = {
    programname: "Profile",
    userdetails: {}
  }

  getUserDetails() {
    return {'details': {'userID': 24, 'aidID': 1, 'Name': 'Arkar', 'password': 'password', 'email': 'test.Arkar\n@test.com', 'latitude': -37.84049647216177, 'longitude': 144.23371848079623}, 'history': [{'userID': 24, 'time': '24_01_2018', 'sum(s.score)': 9}, {'userID': 24, 'time': '24_02_2018', 'sum(s.score)': 15}, {'userID': 24, 'time': '24_03_2018', 'sum(s.score)': 20}, {'userID': 24, 'time': '24_11_2017', 'sum(s.score)': 0}, {'userID': 24, 'time': '24_12_2017', 'sum(s.score)': 0}, {'userID': 24, 'time': '25_03_18', 'sum(s.score)': 22}, {'userID': 24, 'time': '5th of March', 'sum(s.score)': 18}]}
  }

  componentWillMount() {
    this.setState({
      userdetails: this.getUserDetails()
    })
  }

  render() {
    var usercoord = [
      this.state.userdetails.details.latitude,
      this.state.userdetails.details.longitude
    ]

    return (
      <Container>

        <Grid padded>
        <Grid.Row>
          <Header as='h1'>Aid Participant Profile</Header>
        </Grid.Row>
        <Divider/>

        <Grid.Row>
          <Grid.Column width={6}>
          <Grid.Row>
          <Header as='h3'>Arkar</Header>
          <Divider/>
          <Card style={{left: "-100px"}}>
            <Image  src={'./elliot1.jpg'} />
            <Card.Content>
              <Card.Header>
                Farmer in Rurual Myanmar
              </Card.Header>
            </Card.Content>
          </Card>
          </Grid.Row>
          <Grid.Row>
          <Divider/>
          <Map refs='map' center={[21.323072, 97.165481]} zoom={5} style={{width: 600,height: 200}}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={[21.323072, 97.165481]}>
            <Popup>
            </Popup>
          </Marker>
          </Map>
        </Grid.Row>
        </Grid.Column>
        <Grid.Column width={10}>
          <Grid.Row style={{maringTop:10}}>
          <Header as='h3'>Data Feed</Header>
          <Divider/>
          <ProfileGraph/>
          </Grid.Row>
        </Grid.Column>
        </Grid.Row>
        <Divider/>
        <Grid.Row>

        </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default ProgramProfile;

//ReactDOM.render(<CustomTheme/>, mountNode)

// <Grid.Row>
//
//
//   <Card.Group>
//   <Card centered={true}>
//   <Image size='medium'
//       src='./user.png' />
//   <Card.Content>
//     <Card.Header>
//       {this.state.userdetails.details.Name}
//     </Card.Header>
//   </Card.Content>
//   </Card>
//   </Card.Group>
//   <Card>
//   <ProfileGraph/>
//   </Card>
// </Grid.Row>
//   <Grid.Row>
//     <Container>
//     </Container>
//   </Grid.Row>
