const { Class } = require('../models');

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    }
  },
  Mutation: {

  }
};

module.exports = resolvers;