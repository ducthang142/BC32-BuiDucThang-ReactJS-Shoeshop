import React from "react";

const ShoeList = ({ products, onClick, onAddToCart }) => {
  return (
    <div className="row">
      {products.map((shoe) => {
        return (
          <div key={shoe.id} className="col-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={shoe.image} alt />
              <div className="card-body">
                <h4 className="card-title">{shoe.name}</h4>
                <p className="card-text">${shoe.price}</p>
                <div className="row justify-content-between">
                  <button
                    className="btn btn-info col-5"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() =>onClick(shoe)}
                  >
                    Detail
                  </button>
                  <button className="btn btn-warning col-5" onClick={() =>onAddToCart(shoe)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoeList;
