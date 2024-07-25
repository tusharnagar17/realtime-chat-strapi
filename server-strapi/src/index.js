const setupSocket = require("./socketio");

module.exports = {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }) {
    strapi.io = setupSocket(strapi);
  },
};
