const { RESTDataSource } = require('apollo-datasource-rest');

class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/speakers';
  }

  async getSpeakerById(id) {
    const data = await this.get(`/${id}`);
    return data;
  }

  async getSpeakers() {
    const data = await this.get('/');
    return data;
  }

  async makeSpeakerFeatured(id) {
    const data = await this.patch(`/${id}`, {
      featured: true,
    });
    return data;
  }
}

module.exports = SpeakerAPI;
