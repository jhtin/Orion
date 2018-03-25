import React from 'react';
import {VictoryLabel, VictoryBar, VictoryAxis, VictoryChart} from 'victory';
const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

class ProfileGraph extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        data: [{x: 0, y: 1}]
      };
    }
  
    componentDidMount() {
      this.setStateInterval = window.setInterval(() => {
        this.setState({
          data: this.getData()
        });
      }, 3000);
    }
  
    componentWillUnmount() {
      window.clearInterval(this.setStateInterval);
    }
  
    getData() {
      const bars = 10;
      var data = this.state.data;
      data.push({x: this.state.data.length, y: Math.random(2, 10)});
      
      return data ;
    }
  
    render() {
      console.log(this.state.data);
      return (
        <div>
        <VictoryChart
          domainPadding={{ x: 20 }}
          animate={{duration: 500}}
        >
          <VictoryBar
            data={this.state.data}
            style={{
              data: { fill: "tomato", width: 12 }
            }}
            animate={{
              onExit: {
                duration: 500,
                before: () => ({
                  _y: 0,
                  fill: "orange",
                  label: "BYE"
                })
              }
            }}
          />

        </VictoryChart>
        </div>
      );
    }
  }

export default ProfileGraph;
//ReactDOM.render(<CustomTheme/>, mountNode)