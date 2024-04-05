import React, { useEffect, useState } from "react";

const SearchProduct = ({ product, children }) => {
  const [localProduct, setLocalProduct] = useState(product);

  useEffect(() => {
    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      //console.log("componentWillUnmount - Product");
    };
  }, []);

  return (
    <div className="col-lg-3">
      <div className="card m-2">
        <div className="card-body">
          <h4 className="p-2 m-2">{localProduct.title}</h4>
          <img src={localProduct.thumbnail} alt={localProduct.description} />
          <br></br>
          <br></br>
          <h5 className=""> ${localProduct.price}</h5>
        </div>
        {/* card footer ends here*/}
      </div>
    </div>
  );
};

export default SearchProduct;
