import React from "react";
import { fetchOrder } from "./api/api";

const GetOrderInformation = ({ orderID }) => {
  React.useEffect(() => {
    if (orderID) {
      getInformation(orderID);
    }
  }, [orderID]);

  const [orderInfo, setOrderInfo] = React.useState();
  const [errorInfo, setErrorInfo] = React.useState();

  const getInformation = async orderID => {
    try {
      const result = await fetchOrder(orderID);
      const data = result.body.data;
      setOrderInfo(data);
    } catch (error) {
      setOrderInfo(null);
      setErrorInfo(error.body.error);
    }
  };

  return (
    <div
      style={{
        flexBasis: "50%",
        height: "100%",
        padding: "15px"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        Order Information
      </h1>
      {orderInfo ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", marginBottom: "25px" }}>
            User: {orderInfo.user.name}
          </div>
          <div>Products: </div>
          {orderInfo.products.map(product => {
            return (
              <div key={product.id}>
                ID: {product.id}, Quantity: {product.quantity}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {errorInfo && <div>{errorInfo}</div>}
          Input a valid Order ID to see information
        </div>
      )}
    </div>
  );
};
export default GetOrderInformation;
