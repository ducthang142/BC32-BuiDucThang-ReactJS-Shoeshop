import React from "react";

const Cart = ({ carts, onChange, onPurchase }) => {
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="modalCart"
        tabIndex={-1}
        aria-labelledby="modalCartLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalCartLabel">
                Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          width="50px"
                          height="auto"
                        />
                      </td>
                      <td>{item.price}</td>
                      <td>
                        <button className="btn btn-secondary" onClick={()=>onChange(item.id, -1)}>-</button>
                        <span className="mx-2">{item.quantity}</span>
                        <button className="btn btn-success" onClick={()=>onChange(item.id, 1)}>+</button>
                      </td>
                      <td>{item.quantity * item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={() => onPurchase()}>
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
