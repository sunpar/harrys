/*
Exercise: Let's make an Order Dashboard!
*/

import React from "react";
import ReactDOM from "react-dom";
// import GetOrderInformation from "./getOrderInformation";
// import GetOrderInput from "./getOrderInput";
import { fetchOrder } from "./api/api";
import App from "./App";
import "./styles.css";

// const App = () => {
//   const [orderNum, setOrderNum] = React.useState(null);

//   return (
//     <div>
//       <GetOrderInput setOrderID={setOrderNum}></GetOrderInput>
//       <GetOrderInformation orderID={orderNum}></GetOrderInformation>
//     </div>
//   );
// };

const rootElement = document.getElementById("root");
console.log(ReactDOM);
ReactDOM.render(<App />, rootElement);
