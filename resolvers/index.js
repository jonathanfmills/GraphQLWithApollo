const Query = require("./query");
const Mutation = require("./mutation");
const Session = require("./sessions");
const Speaker = require("./speakers");
const resolvers = { Query, Mutation, Session, Speaker };

module.exports = resolvers;
