import React from 'react';
import { Icon, Card, Container, Grid, Header, Divider, Image } from 'semantic-ui-react';
import ProgramOverFeed from './ProgramOverFeed';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';

class ProgramOver extends React.Component {
  state = {
    programname: "Human Development Initiatives",
    percent: 73,
    data: this.getData(73),
  }

  componentDidMount() {
    // let percent = 25;
    // this.setStateInterval = window.setInterval(() => {
    //   percent += (Math.random() * 25);
    //   percent = (percent > 100) ? 0 : percent;
    //   this.setState({
    //     percent, data: this.getData(percent)
    //   });
    // }, 2000);
  }

  componentWillUnmount() {
    // window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
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
          <Header as='h3'>Participant distribution</Header>
          <Divider/>
          <Map refs='map' center={[0,100]} zoom={6} >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          </Map>

        </Grid.Column>
        <Grid.Column width={10}>
          <Header as='h3'>Data Feed</Header>
          <Divider/>
          <ProgramOverFeed/>
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

export default ProgramOver;

//ReactDOM.render(<CustomTheme/>, mountNode)

// <Grid columns={2} centered={false}>
//   <Grid.Row>
//     <Grid.Column>
//       <Map refs='map' center={[0,100]} zoom={6} style={{height: 600, width: 600}}>
//       <TileLayer
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//       />
//       </Map>
//     </Grid.Column>
//     <Grid.Column>
//       <Map refs='map' center={[0,100]} zoom={6} style={{height: 600, width: 600}}>
//       <TileLayer
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//       />
//       </Map>
//     </Grid.Column>
//   </Grid.Row>
// </Grid>

// <Grid padded>
// <Grid.Row>
//   <Header as='h1'>{this.state.programname}</Header>
// </Grid.Row>
// <Divider/>
//
// <Grid.Row>
//   <Grid.Column width={6}>
//
//   <Map refs='map' center={[0,100]} zoom={6} style={{height: 600, width: 600}}>
//   <TileLayer
//     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//     url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//   />
//   </Map>
//
// </Grid.Column>
// <Grid.Column width={10}>
// More data here
// </Grid.Column>
//
// </Grid.Row>
// <Divider/>
// <Grid.Row>
//   <Container>
//   <ProgramOverFeed/>
//   </Container>
// </Grid.Row>
// </Grid>
