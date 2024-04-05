import React, { Component } from "react";

export default class Product extends Component {
  state = {
    product: this.props.product,
  };

  render() {
    console.log(this.props);
    return (
      <div className="col-lg-3">
        <div className="card m-2">
          <div class="card-body">
            <div class="text-muted">
              # {this.state.product.id}
              <span
                class="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>
            <h4 className="p-2 border-top m-2">{this.state.product.title}</h4>
            <img
              src={this.state.product.thumbnail}
              alt={this.state.product.description}
            />
            <br></br>
            <br></br>
            <h5 class> ${this.state.product.price}</h5>
          </div>
          {/* card body ends here*/}
          <div className="card-footer text-right">
            <div class="float-left">
              <span className="badge">{this.state.product.quantity} </span>

              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            {/* float left ends here*/}
            <div className="float-right">{this.props.children}</div>
          </div>
        </div>
        {/* card footer ends here*/}
      </div>
    );
  }

  componentDidMount() {
    //console.log("componentDidMount - Product");
  }

  componentDidUpdate() {
    //console.log("componentDidUpdate - Product");
  }

  //Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    //console.log("componentWillUnmount - Product");
  }
}
