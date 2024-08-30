class ErrorHandler {
  static handleApiError(error) {
    if (error.response) {
      console.error(`API Error: ${error.response.status} - ${error.response.data}`);
      return `API Error: ${error.response.status} - ${error.response.data}`;
    } else if (error.request) {
      console.error('No response received from the API.');
      return 'No response received from the API.';
    } else {
      console.error(`Error: ${error.message}`);
      return `Error: ${error.message}`;
    }
  }
}

export default ErrorHandler;
