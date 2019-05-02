import React from "react";
import { Line } from "react-chartjs-2";
import * as zoom from "chartjs-plugin-zoom";
import { chartJsConfig, chartColors, chartDataset } from "../chartConfig.js";

class StocksGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockName: ""
    };
  }
  // too big a function?
  updateChart = () => {
    let chart = this.refs.chart.chartInstance;
    if (Object.keys(this.props.stocks).length === 0) {
      chart.data.datasets = [];
      return chart.update();
    }

    Object.keys(this.props.stocks).map((stock_name, index) => {
      let current_stock = this.props.stocks[stock_name];

      let chart_dataset = chart.data.datasets.find(dataset => {
        return dataset.label === stock_name.toUpperCase();
      });

      if (current_stock.is_selected) {
        let current_stock = this.props.stocks[stock_name];
        if (chart_dataset) {
          // only update the data, don't create a new dataset for the graph
          chart_dataset.data = this.getStockValues(current_stock);
        } else {
          // create a new dataset for graph
          if (current_stock) {
            this.setState({
              stockName: stock_name ? stock_name : ""
            });

            chart.data.datasets = chart.data.datasets.concat([
              chartDataset(
                stock_name,
                chartColors[index],
                this.getStockValues(current_stock)
              )
            ]);
          }
        }
      } else {
        if (chart_dataset) {
          // remove the dataset from graph
          chart.data.datasets.splice(
            chart.data.datasets.indexOf(chart_dataset),
            1
          );
        }
      }
      chart.update();
    });
  };

  componentDidUpdate = () => {
    this.updateChart();
  };

  // returns an array of objects, {t: timestamp, y: value}
  getStockValues = stock => {
    return stock.history.map(history => {
      return { t: new Date(history.time), y: history.value };
    });
  };

  resetZoom = () => {
    this.refs.chart.chartInstance.resetZoom();
  };
  
  //export the data into CSV file format
  //currently using open source stock API quandl to demostrate and make this feature functional
  downloadData = () => {
    if (this.state.stockName) {
      var csvFile =
        "https://www.quandl.com/api/v1/datasets/WIKI/" +
        this.state.stockName +
        ".csv";
      var win = window.open(csvFile, "_blank");
      win.focus();
    }
  };

  render() {
    return (
      <div className={"card column"}>
        <div className="card-header">
          <div className="card-header-title">
            Graphical History: {this.state.stockName.toUpperCase()}
          </div>
        </div>
        <div className="card-content">
          <p className="is-size-7 has-text-info">
            {this.refs.chart &&
            this.refs.chart.chartInstance.data.datasets.length > 0
              ? "Scroll/pinch to zoom, drag to pan."
              : "Click on any stocks on your left to see graphs."}
          </p>
          <button
            className="button is-small is-pulled-right"
            onClick={this.downloadData}
          >
            Export
          </button>

          <button
            className="button is-small is-pulled-right"
            onClick={this.resetZoom}
          >
            Reset zoom
          </button>
          <Line data={{ datasets: [] }} options={chartJsConfig} ref="chart" />
        </div>
      </div>
    );
  }
}

export default StocksGraph;
