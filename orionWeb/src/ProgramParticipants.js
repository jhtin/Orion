import React from 'react';
import {Button, Table, Container } from 'semantic-ui-react'

class ProgramParticipants extends React.Component {
  state = {
    data: []
  }

  getData() {
    return [{"userID": 24, "aidID": 1, "Name": "Arkar", "password": "password", "email": "test.Arkar\n@test.com", "latitude": -37.84049647216177, "longitude": 144.23371848079623}, {"userID": 25, "aidID": 1, "Name": "Aung", "password": "password", "email": "test.Aung\n@test.com", "latitude": -38.01048594322191, "longitude": 145.57417876710147}, {"userID": 26, "aidID": 1, "Name": "Aye", "password": "password", "email": "test.Aye\n@test.com", "latitude": -38.06594298785097, "longitude": 145.92953968982619}, {"userID": 27, "aidID": 1, "Name": "Bennu", "password": "password", "email": "test.Bennu\n@test.com", "latitude": -37.28232735173247, "longitude": 145.40562913315551}, {"userID": 28, "aidID": 1, "Name": "Cetan", "password": "password", "email": "test.Cetan\n@test.com", "latitude": -37.83657244902436, "longitude": 145.83996962278613}, {"userID": 29, "aidID": 1, "Name": "Champo", "password": "password", "email": "test.Champo\n@test.com", "latitude": -37.790143487043665, "longitude": 144.54129659878552}, {"userID": 30, "aidID": 1, "Name": "Chesa", "password": "password", "email": "test.Chesa\n@test.com", "latitude": -37.517241023423594, "longitude": 144.78483586285358}, {"userID": 31, "aidID": 1, "Name": "Chewa", "password": "password", "email": "test.Chewa\n@test.com", "latitude": -38.406000160550114, "longitude": 145.09244648220673}, {"userID": 32, "aidID": 1, "Name": "Chime", "password": "password", "email": "test.Chime\n@test.com", "latitude": -37.74598026528815, "longitude": 145.70794833479917}, {"userID": 33, "aidID": 1, "Name": "Chit", "password": "password", "email": "test.Chit\n@test.com", "latitude": -38.451733910768766, "longitude": 144.81368922016028}, {"userID": 34, "aidID": 1, "Name": "Chodren", "password": "password", "email": "test.Chodren\n@test.com", "latitude": -38.49422166440501, "longitude": 145.39355213600706}, {"userID": 35, "aidID": 1, "Name": "Chomden", "password": "password", "email": "test.Chomden\n@test.com", "latitude": -38.20217028452964, "longitude": 145.72656528713622}, {"userID": 36, "aidID": 1, "Name": "Dachen", "password": "password", "email": "test.Dachen\n@test.com", "latitude": -37.19177847448584, "longitude": 144.21337047821098}, {"userID": 37, "aidID": 1, "Name": "Daivika", "password": "password", "email": "test.Daivika\n@test.com", "latitude": -37.9861263934424, "longitude": 144.17686837215464}, {"userID": 38, "aidID": 1, "Name": "Dampa", "password": "password", "email": "test.Dampa\n@test.com", "latitude": -38.235817450587604, "longitude": 144.41547404453107}, {"userID": 39, "aidID": 1, "Name": "Dedan", "password": "password", "email": "test.Dedan\n@test.com", "latitude": -38.478281272508525, "longitude": 144.90145360252237}, {"userID": 40, "aidID": 1, "Name": "Denpa", "password": "password", "email": "test.Denpa\n@test.com", "latitude": -37.963714499732205, "longitude": 145.6543264153585}, {"userID": 41, "aidID": 1, "Name": "Denpo", "password": "password", "email": "test.Denpo\n@test.com", "latitude": -38.36339682074872, "longitude": 144.14006659635376}, {"userID": 42, "aidID": 1, "Name": "Eindra", "password": "password", "email": "test.Eindra\n@test.com", "latitude": -37.4125914761418, "longitude": 145.5384649809262}, {"userID": 43, "aidID": 1, "Name": "Garma", "password": "password", "email": "test.Garma\n@test.com", "latitude": -37.06846444233273, "longitude": 145.8407754111317}, {"userID": 44, "aidID": 1, "Name": "Gawa", "password": "password", "email": "test.Gawa@test.com", "latitude": -38.1375272784093, "longitude": 145.57920953204192}]
  }
  
  componentDidMount() {
    this.setState({
      data: this.getData()
    });
  }
  
  tableGenerator() {
    var tablerows = []

    for (var i=0; i< this.state.data.length; i++) {
      tablerows.push(
      <Table.Row>
        <Table.Cell>{this.state.data[i].userID}</Table.Cell>
        <Table.Cell>{this.state.data[i].Name}</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>  <Button 
          circular 
          onClick={() => {this.props.changeProfile()}}

          >
    View</Button></Table.Cell>
      </Table.Row>
      )
    }

    return (tablerows);
  }
  
  render() {
    return (
      <Container>
         <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Score</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {this.tableGenerator()}
    </Table.Body>
  </Table>
      </Container>
    
  )
  }
}

export default ProgramParticipants;

//ReactDOM.render(<CustomTheme/>, mountNode)