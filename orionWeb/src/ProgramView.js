import React from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import ProgramOver  from './ProgramOver';
import ProgramPartSwitch from './ProgramPartSwitch';
import ProgramData  from './ProgramData';


export default class ProgramView extends React.Component {
  state = { activeItem: 'Overview', curPage: <ProgramOver/> }

  handleItemClick = (e, { name }) => {
    var page = this.getPage(name);
    this.setState({ 
      activeItem: name,
      curPage: page
     });}

  getPage(name) {
    var lookup =  
    {
      Overview: <ProgramOver/>,
      Participants: <ProgramPartSwitch/>,
      Data: <ProgramData/>
    };

    return lookup[name]
  }
  render() {
    const { activeItem } = this.state

    return (
      <Grid stretched>
      <Grid.Row>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='Overview' active={activeItem === 'Overview'} onClick={this.handleItemClick} />
            <Menu.Item name='Participants' active={activeItem === 'Participants'} onClick={this.handleItemClick} />
            <Menu.Item name='Data' active={activeItem === 'Data'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

        <Grid.Column width={12}>
          {this.state.curPage}
        </Grid.Column>
      </Grid.Row>
      </Grid>
    )
  }
}


//ReactDOM.render(<CustomTheme/>, mountNode)