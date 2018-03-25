import React from 'react';
import {VictoryLabel, VictoryBar, VictoryAxis, VictoryChart} from 'victory';
import moment from 'moment';
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
        data: [{x: 0, y: 1}],
        history: []
      };
    }

    componentDidMount() {
      var t=setInterval(this.getrealTime.bind(this),5000);
    }

    getrealTime(){
      fetch('http://dbd562db.ngrok.io/history?userID=24')
          .then((data) => data.json())
          .then((datares) => {
              // get json data and extract the first lat and lng component
              console.log("data",datares);

              let user = datares.details;
              let history = datares.history;
              // for(let i=0; i<history.length; i++){
              //   console.log("time", history[i].time)
              //   history[i].time = parseInt(moment(history[i].time, 'DD_MM_YYYY HH:MM').unix());
              //   console.log("time2", history[i].time)
              // }
              history.sort(function(a,b){
                return a.time - b.time
              })
              console.log(history)

              var dataSet = [];
              //this.refs.map.getLeafletElement().
              if (this.state.history.length < history.length) {
                for (var i=0; i < history.length; i++) {
                  dataSet.push({x: i, y: history[i].sum});
                }
                this.setState({
                  history: history,
                  data: dataSet
                })

              }
            });

    }

    componentWillMount() {
      fetch('http://dbd562db.ngrok.io/history?userID=24')
          .then((data) => data.json())
          .then((datares) => {
              // get json data and extract the first lat and lng component
              console.log("data",datares);

              let user = datares.details;
              let history = datares.history;
              // for(let i=0; i<history.length; i++){
              //   console.log("time", history[i].time)
              //   history[i].time = parseInt(moment(history[i].time, 'DD_MM_YYYY HH:MM').unix());
              //   console.log("time2", history[i].time)
              // }
              history.sort(function(a,b){
                return a.time - b.time
              })
              console.log(history)

              var dataSet = [];
              //this.refs.map.getLeafletElement().
              if (this.state.history.length < history.length) {
                for (var i=0; i < history.length; i++) {
                  dataSet.push({x: i, y: history[i].sum});
                }
                this.setState({
                  history: history,
                  data: dataSet
                })

              }
            });

      /*
      this.interval = setInterval(
          () =>
          fetch('http://dbd562db.ngrok.io/history?userID=24')
          .then(data => data.json())
          .then((data) => {
              // get json data and extract the first lat and lng component
              console.log(data);

              var user = data.details;
              var history = data.history;
              var dataSet = [];
              //this.refs.map.getLeafletElement().
              if (this.state.history.length < history.length) {
                for (var i=0; i < history.length; i++) {
                  dataSet.push({x: i, y: history[i].sum});
                }
                this.setState({
                  history: history,
                  data: dataSet
                })

              }


          }), 1000000);
          //this.setState({lat: 51.4826, lng: 0});
          */
    }

    componentWillUnmount() {
      window.clearInterval(this.setStateInterval);
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
              data: { fill: "blue", width: 12 }
            }}
            animate={{
              onExit: {
                duration: 500,
                before: () => ({
                  _y: 0,
                  fill: "blue",
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
