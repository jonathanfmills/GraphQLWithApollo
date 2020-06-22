const _ = require("lodash");

module.exports = {
  async sessions(speaker, args, { dataSources }) {
    const sessions = await dataSources.sessionAPI.getSessions();

    const returns = sessions.filter((session) => {
      return _.filter(speaker.sessions, { id: session.id }).length > 0;
    });

    return returns;
  },
};
