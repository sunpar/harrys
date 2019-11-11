import React from "react";
import ReactDOM from "react-dom";
import GetOrderInformation from "./getOrderInformation";
import GetOrderInput from "./getOrderInput";
import { fetchOrder } from "./api/api";

import "./app.css";

const App = () => {
  const [orderNum, setOrderNum] = React.useState(null);

  return (
    <div className="App">
      <GetOrderInput setOrderID={setOrderNum}></GetOrderInput>
      <GetOrderInformation orderID={orderNum}></GetOrderInformation>
    </div>
  );
};

export default App;
