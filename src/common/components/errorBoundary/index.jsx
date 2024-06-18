import React, { useState, useEffect } from "react";
import "./style.scss";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const ErrorFallback = ({ code, message }) => {
    let displayMessage;
    switch (code) {
      case 400:
        displayMessage = "Bad Request. Please check your input.";
        break;
      case 401:
        displayMessage = "Unauthorized. Please log in.";
        break;
      case 403:
        displayMessage = "Forbidden. You do not have permission to access this.";
        break;
      case 404:
        displayMessage = "Not Found. The requested resource could not be found.";
        break;
      case 500:
        displayMessage = "Internal Server Error. Please try again later.";
        break;
      case 502:
        displayMessage = "Bad Gateway. The server is down or being upgraded.";
        break;
      case 503:
        displayMessage = "Service Unavailable. The server is currently unavailable.";
        break;
      case 504:
        displayMessage = "Gateway Timeout. The server is taking too long to respond.";
        break;
      default:
        displayMessage = message || "An unexpected error has occurred.";
    }

    return (
      <div className="ErrorBoundary-container" role="alert">
        <p>Something went wrong:</p>
        {code && <p>Status Code: {code}</p>}
        <p>{displayMessage}</p>
      </div>
    );
  };

  useEffect(() => {
    const handleError = (error) => {
      setHasError(true);
      console.log("Error:", error);

      if (error && error.error && error.error.response && error.error.response.status) {
        setStatusCode(error.error.response.status);
      } else if (error && error.reason && error.reason.message === 'Network Error') {
        setStatusCode(null);
        setErrorMessage('Network Error. Please check your internet connection.');
      } else if (error && error.reason && error.reason.message.includes('timeout')) {
        setStatusCode(504);
        setErrorMessage('Request Timeout. The server is taking too long to respond.');
      } else {
        setStatusCode(null);
        setErrorMessage('An unexpected error has occurred.');
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleError);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleError);
    };
  }, []);

  if (hasError) {
    return <ErrorFallback code={statusCode} message={errorMessage} />;
  }

  return children;
};

export default ErrorBoundary;
