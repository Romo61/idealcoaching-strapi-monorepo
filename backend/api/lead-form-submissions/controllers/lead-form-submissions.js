"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    return await strapi.plugins[
      "email-designer"
    ].services.email.sendTemplatedEmail(
      {
        to: "maderamadeus@gmail.com", // required
      },
      {
        templateId: 1, // required - you can get the template id from the admin panel (can change on import)
      }
    );
  },
};
