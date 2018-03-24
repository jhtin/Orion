import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Divider, Breadcrumb, Sidebar, Button, Card, Icon, Image, Segment, Menu } from 'semantic-ui-react';



class App extends Component {
  state = { sidevisible: false,
    programs: [{
      id: 1,
      name: "Local Governance Program",
      imgSrc: "./program1.jpg",
      description: "Hello",
      noParticipants: 150
    },
    {
      id: 2,
      name: "Human Development Initiatives",
      imgSrc: "./program2.jpg",
      description: "Hello",
      noParticipants: 150
    },
    {
      id: 3,
      name: "Area Development Program",
      imgSrc: "./program3.jpg",
      description: "Hello",
      noParticipants: 150
    },
    {
      id: 3,
      name: "Community Banking Program",
      imgSrc: "./program4.jpg",
      description: "Hello",
      noParticipants: 150
    }
    ],
    breadcrumbs: ["Main", "Program"]
  }
  toggleVisibility = () => this.setState({ sidevisible: !this.state.sidevisible })
  render() {
    return (
      <div className="App">

        <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.state.sidevisible} icon='labeled' vertical inverted>
          <Menu.Item name='home'  onClick={this.handleItemClick} />
          <Menu.Item name='messages'  onClick={this.handleItemClick} />
          <Menu.Item name='friends'  onClick={this.handleItemClick} />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
          <Button onClick={this.toggleVisibility}><Icon name='grid layout' /></Button>
          <Breadcrumb>
          {this.generateBreadcrumbs()}
          </Breadcrumb>
          <Divider/>
          <Grid>
            <Grid.Row stretched container columns={2}>
            {this.generateProgramCards()}
            </Grid.Row>
          </Grid>

          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>

    </div>
    );
  }

  generateProgramCards() {
    var cards = [];
    for (var i = 0; i < this.state.programs.length; i++){
      cards.push(
      <Grid.Column>
          <Card internalPosition='left'>
            <Image src={this.state.programs[i].imgSrc}/>
            <Card.Content>
              <Card.Header>
                {this.state.programs[i].name}
              </Card.Header>
          <Card.Description>
            {this.state.programs[i].description}
          </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <a>
            <Icon name='user' />
            {this.state.programs[i].noParticipants} Participants
          </a>
          </Card.Content>
        </Card>
        {this.generateChart()}
      <Divider/>
      </Grid.Column>
      
      )
    }
  return cards;
  }

  generateBreadcrumbs() {
    var bc = [<Breadcrumb.Section link>{this.state.breadcrumbs[0]}</Breadcrumb.Section>];
    for (var i = 1; i < this.state.breadcrumbs.length; i++){
      bc.push(
      <Breadcrumb.Divider icon='right angle' />
      );
      bc.push(
        <Breadcrumb.Section link>{this.state.breadcrumbs[i]}</Breadcrumb.Section>
      );
    }
    
    return bc;
  }

  generateChart() {
    var LineChart = require('react-d3-basic').LineChart;

    var data = [{
          "sale": "202",
          "year": "2000"
      }, {
          "sale": "215",
          "year": "2001"
      }, {
          "sale": "179",
          "year": "2002"
      }, {
          "sale": "199",
          "year": "2003"
      }, {
          "sale": "134",
          "year": "2003"
      }, {
          "sale": "176",
          "year": "2010"
      }];
      var width = 500,
      height = 300,
      margins = {left: 100, right: 100, top: 50, bottom: 50},
      // chart series,
      // field: is what field your data want to be selected
      // name: the name of the field that display in legend
      // color: what color is the line
      chartSeries = [
        {
          field: 'total',
          name: 'Total',
          color: '#ff7f0e'
        }
      ],
      // your x accessor
      x = function(d) {
        return d.year;
      },
      xScale = 'time';
  
  
    return(
      <LineChart
      margins= {margins}
      data={data}
      width={width}
      height={height}
      chartSeries={chartSeries}
      x={x}
      xScale={xScale}
    />
    );
    
  }
}


export default App;
