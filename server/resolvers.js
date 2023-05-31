const mockData = require("./mock.json");

const resolvers = {
  booking: () => mockData,
  bookingCheck: ({ bookingCode, lastName }) => {
    return (
      mockData.bookingCode.toLowerCase() === bookingCode.toLowerCase() &&
      mockData.passengers.lastName.toLowerCase() === lastName.toLowerCase()
    );
  },
};

module.exports = resolvers;
