const _ = require('lodash');

module.exports = {
  sessions: (parent, args, { dataSources }, info) => {
    const allSessions = dataSources.sessionAPI.getSessions(args);
    return allSessions;
  },
  sessionById: (parent, { id }, { dataSources }, info) => {
    const allSessions = dataSources.sessionAPI.getSessionById(id);
    return allSessions;
  },
  speakers: async (parent, args, { dataSources }, info) => {
    const allSpeakers = await dataSources.speakerAPI.getSpeakers(args);
    return allSpeakers;
  },
  speakerById: async (parent, { id }, { dataSources }, info) => {
    const speaker = await dataSources.speakerAPI.getSpeakerById(id);
    return speaker;
  },
};
