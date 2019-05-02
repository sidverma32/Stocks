import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import ReactTimeAgo from "react-timeago";



class StockRow extends React.Component {
  getStockValueColor = stock => {
    if (stock.current_value < stock.history.slice(-2)[0].value) {
      return "red";
    } else if (stock.current_value > stock.history.slice(-2)[0].value) {
      return "green";
    } else {
      return null;
    }
  };

//custom function to change the updated time value (AM/PM for more convenience)
  getUpdatedDateTime = data => {
    var timestamp = data.slice(-1)[0].time;
    var newDate = new Date(timestamp);
    var dateString = newDate.toDateString();
    var timeString = newDate.toLocaleTimeString();
    var hours = newDate.getHours();
    var ampm = "AM";
    if (hours >= 12) {
      hours -= 12;
      ampm = "PM";
    }
    const finalDate = dateString + " " + timeString + " " + ampm;
    return finalDate;
  };

  render() {
    let history = this.props.stock_data.history;
    return (
      <tr
        className={this.props.stock_data.is_selected ? "selected" : null}
        id={this.props.stock_name}
        onClick={this.props.toggleStockSelection.bind(
          this,
          this.props.stock_name
        )}
      >
        <td>{this.props.stock_name.toUpperCase()}</td>
        <td className={this.getStockValueColor(this.props.stock_data)}>
          {this.props.stock_data.current_value.toFixed(2)}
        </td>

        <td>
          <Sparklines
            data={history.map(history => {
              return history.value;
            })}
          >
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
        <td className="updated_at">
          <ReactTimeAgo
            date={history.slice(-1)[0].time}
            formatter={() => this.getUpdatedDateTime(history)}
          />
        </td>
      </tr>
    );
  }
}

export default StockRow;
