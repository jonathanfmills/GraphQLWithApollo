module.exports = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    },
    speakers: (parent, args, { dataSources }, info) => {
      const allSpeakers = dataSources.speakerAPI.getSpeakers(args);
      return allSpeakers;
    },
    speakerById: async (parent, { id }, { dataSources }, info) => {
      const speaker = await dataSources.speakerAPI.getSpeakerById(id);
      return speaker;
    },
  },
  Session: {
    async speakers(session, args, { dataSources }) {
      const speakers = await dataSources.speakerAPI.getSpeakers();

      const returns = speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0;
      });

      return returns;
    },
  },
};
