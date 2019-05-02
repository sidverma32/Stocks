import React from "react";
import { Detector } from "react-detect-offline";
import StockRow from "./StockRow.jsx";
import MarketTrendArrow from "./MarketTrendArrow.jsx";

class StocksList extends React.Component {
  constructor(props) {
    super(props);
   
  }
  

  render() {
    return (
      <div className={this.props.expandBlock?"card column is-one-third":"column"} id="stocks_list">
        <div className="card-header">
          <div className="card-header-title">
            Stocks Summary &nbsp;
            <Detector
              render={({ online }) => (
                <span className={online ? "tag is-success" : "tag is-danger"}>
                  {online ? "Live" : "Offline"}
                </span>
              )}
            />
            &nbsp;
            <button className="button is-small" onClick={this.props.resetData}>
              Clear history
            </button>
          </div>
        </div>

        <div className="card-content">
          {this.props.areStocksLoaded() ? (
            <p className="is-size-7 has-text-info">
              Click on a stock to select/unselect
            </p>
          ) : null}
          <table className="table is-bordered">
            <thead>
              <tr>
                <th>
                  Ticker 
                </th>
                <th>
                  Value
                  <MarketTrendArrow current_trend={this.props.market_trend} />
                </th>
                <th>History</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.props.stocks).map((stock_name, index) => {
                let current_stock = this.props.stocks[stock_name];
                return (
                  <StockRow
                    key={index}
                    stock_name={stock_name}
                    stock_data={current_stock}
                    toggleStockSelection={this.props.toggleStockSelection}
                  />
                );
              })}

              {this.props.areStocksLoaded() ? null : (
                <tr>
                  <td colSpan="4">No stocks loaded yet!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default StocksList;
