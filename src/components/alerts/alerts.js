const info = (response, type, message, severity) => {
  console.log(response);
  return {
    state: true,
    type: type || "info",
    message: error.message || message || "Success call api",
    severity: severity || "LOW",
    style: "info",
  };
};

const error = (error, type, message, severity) => {
  console.log(error);
  return {
    state: true,
    type: type || "error",
    message: error.message || message || "Error call api",
    severity: severity || "HIGH",
    style: "error",
  };
};

const warn = (warn, type, message, severity) => {
  console.log(warn);
  return {
    state: true,
    type: type || "warn",
    message: error.message || message || "Low response of the api",
    severity: severity || "MEDIUM",
    style: "war",
  };
};

const levels = {
  error,
  info,
  warn,
};

export default levels;
