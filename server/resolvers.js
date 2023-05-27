const mockData = require("./mock.json");

const resolvers = {
  booking: () => mockData,
};

module.exports = resolvers;
