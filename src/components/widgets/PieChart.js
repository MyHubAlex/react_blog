import React from 'react';
import ReactDOM from 'react-dom';

class PieChart extends React.Component {

  componentDidMount() {
    if (__CLIENT__) {
      const c3 = require('c3');

      this.chart = c3.generate({
        bindto: ReactDOM.findDOMNode(this.refs.chart),
        data: { columns: this.props.columns, type: 'pie' },
      });
  }
  }

  componentWillReceiveProps(newProps) {
   this.chart.load({ columns: newProps.columns });
 }

  render() {
    return (<div ref='chart' />);
  }
}

export default PieChart;
