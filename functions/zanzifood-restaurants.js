const restaurants = require("../assets/data");

exports.handler = async () => {
  return {
    headers: {
      "Access-Control-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(restaurants),
  };
};
