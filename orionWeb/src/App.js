import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Divider, Breadcrumb, Sidebar, Button, Card, Icon, Image, Segment, Menu, Label } from 'semantic-ui-react';
import ProgramView from './ProgramView';



class App extends Component {
  state = { sidevisible: false,
    programs: [{
      id: 1,
      name: "Human Development Initiatives",
      imgSrc: "./program2.jpg",
      description: "Addressed basic needs of poor communities by supporting sustainable livelihoods, improving access to social services, small village infrastructure, water and sanitation and HIV/AIDS prevention.",
      noParticipants: 423
    },
    {
      id: 2,
      name: "Local Governance Program",
      imgSrc: "./program1.jpg",
      description: "Enhancing the capacities of local governments and the civil society so that they can bring the services to the people efficiently; involving citizens more actively in the governance process.",
      noParticipants: 350
    },
    {
      id: 3,
      name: "Area Development Program",
      imgSrc: "./program3.jpg",
      description: "Each ADP focuses on a distinct geographical area and partners local stakeholders to improve the well-being of children.",
      noParticipants: 234
    },
    {
      id: 3,
      name: "Community Banking Program",
      imgSrc: "./program4.jpg",
      description: "Supporting access to finance as well as strengthening of local institutions supporting employment services and entrepreneurship.",
      noParticipants: 283
    }
    ],
    breadcrumbs: ["United Nations Development Programme", "Current Programs"],
    showDetails: false,
  }
  toggleVisibility = () => this.setState({ sidevisible: !this.state.sidevisible })
  render() {
    return (
      <div className="App">
        {this.state.showDetails ?
        <div><ProgramView/></div>:
        <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='wide' visible={this.state.sidevisible} icon='labeled' vertical inverted>
          <Menu.Item name='home'  onClick={this.handleItemClick} >
          <Icon name='home' />
          Home
          </Menu.Item>
          <Menu.Item name='messages'  onClick={this.handleItemClick} >
          <Icon name='envelope' />
          Messages
          </Menu.Item>
          <Menu.Item name='messages'  onClick={this.handleItemClick} >
          <Icon name='user' />
          Contacts
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
          <div>
          <Image onClick={this.toggleVisibility} id="navbarorion" size='small' src='./ngo_logo.gif'/>
          <Breadcrumb size="big">
          {this.generateBreadcrumbs()}
          </Breadcrumb>
          <Image style={{float: "right"}} size='small' src='./orionLogo.png'/>
          </div>
          <Divider/>
          <Grid divided='vertically'>
            {this.generateProgramCards()}
          </Grid>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>}
    </div>
    );
  }

  generateProgramCards() {
    var cards = (
      <Grid columns={2} centered={false}>
        <Grid.Row>
          <Grid.Column>
            <Card style={{width: "70%"}} onClick={() => (this.setState({showDetails:true}))}>
              <Image fluid
              label={{ as: 'a', corner: 'left', icon: 'exclamation', color: "red" }} src={this.state.programs[0].imgSrc} />
              <Card.Content>
                <Card.Header>
                  {this.state.programs[0].name}
                </Card.Header>
                <Card.Description>
                  {this.state.programs[0].description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                <Icon name='user' />
                {this.state.programs[0].noParticipants} Participants
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column style={{marginLeft: "-125px"}}>
          <Card style={{width: "70%"}} onClick={() => console.log("something")}>
            <Image fluid
            label={{ as: 'a', corner: 'left', icon: 'check', color: "green" }} src={this.state.programs[1].imgSrc} />
            <Card.Content>
              <Card.Header>
                {this.state.programs[1].name}
              </Card.Header>
              <Card.Description>
                {this.state.programs[1].description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
              <Icon name='user' />
              {this.state.programs[1].noParticipants} Participants
              </a>
            </Card.Content>
          </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
          <Card style={{width: "70%"}} onClick={() => console.log("something")}>
            <Image fluid
            label={{ as: 'a', corner: 'left', icon: 'check', color: "green" }} src={this.state.programs[2].imgSrc} />
            <Card.Content>
              <Card.Header>
                {this.state.programs[2].name}
              </Card.Header>
              <Card.Description>
                {this.state.programs[2].description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
              <Icon name='user' />
              {this.state.programs[2].noParticipants} Participants
              </a>
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column style={{marginLeft: "-125px"}} >
          <Card style={{width: "70%"}} onClick={() => console.log("something")}>
            <Image fluid
            label={{ as: 'a', corner: 'left', icon: 'check', color: "green" }} src={this.state.programs[3].imgSrc} />
            <Card.Content>
              <Card.Header>
                {this.state.programs[3].name}
              </Card.Header>
              <Card.Description>
                {this.state.programs[3].description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
              <Icon name='user' />
              {this.state.programs[3].noParticipants} Participants
              </a>
            </Card.Content>
          </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
    // for (var i = 0; i < this.state.programs.length; i++){
      // cards.push(
      //         <Grid.Row key={i}>
      // <Grid.Column width={3}>
      //     <Card internalPosition='left'>
      //       <Image src={this.state.programs[i].imgSrc}/>
      //       <Card.Content>
      //         <Card.Header>
      //           {this.state.programs[i].name}
      //         </Card.Header>
      //     <Card.Description>
      //       {this.state.programs[i].description}
      //     </Card.Description>
      //     </Card.Content>
      //     <Card.Content extra>
      //     <a>
      //       <Icon name='user' />
      //       {this.state.programs[i].noParticipants} Participants
      //     </a>
      //     </Card.Content>
      //   </Card>
      // </Grid.Column>
      // <Grid.Column width={3}>
      // <Graph/>
      // </Grid.Column>
      // <Divider/>
      // </Grid.Row>
      // )
    // }
    // for(let i = 0; i < this.state.programs.length; i += 2){
    //   cards.push(
    //     <Grid.Row>
    //
    //     </Grid.Row>
    //   )
    // }
  return cards;
  }

  generateBreadcrumbs() {
    var bc = [<Breadcrumb.Section link>{this.state.breadcrumbs[0]}</Breadcrumb.Section>];
    for (var i = 1; i < this.state.breadcrumbs.length; i++){
      bc.push(
      <Breadcrumb.Divider icon='right angle' />
      );
      bc.push(
        <Breadcrumb.Section active>{this.state.breadcrumbs[i]}</Breadcrumb.Section>
      );
    }

    return bc;
  }



  
}


export default App;
