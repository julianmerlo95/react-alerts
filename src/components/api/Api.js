import React, { useState } from "react";
import levels from "../alerts/alerts";
import "../alerts/alerts.sass";
import axios from "axios";

const Api = () => {
  const [alertHandler, setAlertHandler] = useState({
    state: false,
    type: "",
    message: "",
    severity: "",
    style: "",
  });

  const callHandler = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}?api-ke=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response.data.results);
      return response.data.results;
    } catch (err) {
      setAlertHandler(levels.error(err));
    }
  };

  const deleteAlertHandler = () => {
    setAlertHandler({ state: false });
  };

  return (
    <div>
      <h2>Api</h2>
      <button onClick={callHandler}>Call Api</button>
      {alertHandler.state ? (
        <h2 onClick={deleteAlertHandler} className={alertHandler.style}>
          {alertHandler.message}
        </h2>
      ) : null}
    </div>
  );
};

export default Api;
