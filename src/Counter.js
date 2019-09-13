import React from "react";
import "./styles.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.ClickHandle = this.ClickHandle.bind(this);
  }

  ClickHandle(e) {
    this.props.OnClickHandle(e.target.className);
  }
  render() {
    return (
      <table className="counterBox">
        <tbody>
          <tr>
            <td colSpan="3" className="CounterVal">
              {this.props.count}
            </td>
          </tr>
          <tr>
            <td className="Plus" name="Plus" onClick={this.ClickHandle}>
              {" "}
              <i className="Plus fa fa-plus" aria-hidden="true" />{" "}
            </td>
            <td className="Reset" onClick={this.ClickHandle}>
              {" "}
              <i className="Reset fa fa-retweet" aria-hidden="true" />
            </td>
            <td className="Minus" onClick={this.ClickHandle}>
              {" "}
              <i className="Minus fa fa-minus" aria-hidden="true" />{" "}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Counter;
