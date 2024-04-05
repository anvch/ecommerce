import React, { useEffect, useState } from "react";

const Product = ({ product, onDelete, onIncrement, onDecrement, children }) => {
  const [localProduct, setLocalProduct] = useState(product);

  // Update localProduct state when the product prop changes
  useEffect(() => {
    setLocalProduct(product);
  }, [product]);

  return (
    <div className="col-lg-3">
      <div className="card m-2">
        <div className="card-body">
          <div className="text-muted">
            # {localProduct.id}
            <span
              className="pull-right hand-icon"
              onClick={() => {
                onDelete(localProduct);
              }}
            >
              <i className="fa fa-times"></i>
            </span>
          </div>
          <h4 className="p-2 border-top m-2">{localProduct.title}</h4>
          <img src={localProduct.thumbnail} alt={localProduct.description} />
          <br></br>
          <br></br>
          <h5 className=""> ${localProduct.price}</h5>
        </div>
        {/* card body ends here*/}
        <div className="card-footer text-right">
          <div className="float-left">
            <span className="badge">{localProduct.quantity} </span>

            <div className="btn-group">
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  onIncrement(localProduct, 10);
                }}
              >
                +
              </button>
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  onDecrement(localProduct, 0);
                }}
              >
                -
              </button>
            </div>
          </div>
          {/* float left ends here*/}
          <div className="float-right">{children}</div>
        </div>
      </div>
      {/* card footer ends here*/}
    </div>
  );
};

export default Product;
