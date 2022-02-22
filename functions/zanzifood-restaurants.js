const restaurants = require("../assets/data");

exports.handler = async () => {
  return {
    headers: {
      "Access-Control-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
    statusCode: 200,
    body: JSON.stringify(restaurants),
  };
};
