import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "Scott", phone: "123-456" },
      { id: 2, name: "Scott1", phone: "123-456" },
      { id: 3, name: "Scott2", phone: "123-456" },
      { id: 4, name: "Scott3", phone: "123-456" },
      { id: 5, name: "Scott4", phone: "123-456" },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
      </div>
    );
  }

  //executes when user clicks on refresh button (arrow function for button)
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };
}
