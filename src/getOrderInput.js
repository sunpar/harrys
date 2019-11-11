import React from "react";

const GetOrderInput = ({ setOrderID }) => {
  const [currOrderID, setCurrOrderID] = React.useState(null);
  return (
    <div
      style={{
        flexBasis: "50%",
        backgroundColor: "#dddddd",
        height: "100%",
        padding: "15px"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        Get Order By ID
      </h1>
      <input onChange={evt => setCurrOrderID(evt.target.value)}></input>
      <button onClick={() => setOrderID(currOrderID)}>Retrieve</button>
    </div>
  );
};
export default GetOrderInput;
