import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Moment from 'moment';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      
    };
    this.data = {
      labels: [],
      datasets: [
        {
          label: "Bitcoin live",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [],
        },
      ],
    }

    this.chartsjs = React.createRef();
  }
  componentDidMount() {
    setInterval(this.getData, 2000);
  }
  getData = () => {
    fetch("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", {
      method: "GET",

      headers: {
        "x-ba-key": "ZDJjOWViNDJkZDY5NGJmNTgwMGFiNWU2YzI5M2M2YTc",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.formatAndSetData(response);
        this.setState({
          allData: [...this.state.allData, response],
        });
      });
  };

  getTicket = () => {
    fetch("https://apiv2.bitcoinaverage.com/websocket/v3/get_ticket", {
      method: "GET",

      headers: {
        "x-ba-key": "ZDJjOWViNDJkZDY5NGJmNTgwMGFiNWU2YzI5M2M2YTc",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.setState({
          ticket: response.ticket,
        });
      });
  };

  formatAndSetData = (payload) => {
    let last = payload.last;
    let timestamp = payload.timestamp;
    this.chartsjs.chartInstance.data.labels.push(Moment(new Date(timestamp)).format('MMM Do h:mm A'));
    this.chartsjs.chartInstance.data.datasets[0].data.push(last);
    this.chartsjs.chartInstance.update({
      preservation: true,
  });
  };

  render() {
    return (
      <div style={{margin: 50}}>
        <Line
          data={this.data}
          height={400}
          options={{ maintainAspectRatio: false }}
          ref={(chartsjs) => { this.chartsjs = chartsjs; }}
        />
      </div>
    );
  }
}
