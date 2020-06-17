module.exports = {
  makeSpeakerFeatured: async (parent, { id }, { dataSources }, info) => {
    const speaker = await dataSources.speakerAPI.makeSpeakerFeatured(id);
    return speaker;
  },
};
