const apiSettings = {
  BASE_URL: "http://localhost:4000/books",
  headersApi: (type, data) => {
    return {
      method: type,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
  },
};

export default apiSettings;
