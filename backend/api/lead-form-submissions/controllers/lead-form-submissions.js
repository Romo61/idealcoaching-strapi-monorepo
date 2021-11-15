"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.leadFormSubmission.create(data, { files });
    } else {
      entity = await strapi.services.comment.create(ctx.request.body);
    }

    // send an email by using the email plugin
    /* await strapi.plugins["email"].services.email.send({
      to: "paulbocuse@strapi.io",
      from: "admin@strapi.io",
      subject: "Comment posted that contains a bad words",
      text: `
          The comment #${entity.id} contain a bad words.

          Comment:
          ${entity.content}
        `,
    }); */

    try {
      await strapi.plugins["email-designer"].services.email.sendTemplatedEmail(
        {
          to: "maderamadeus@gmail.com", // required
          from: "hey@mozart409.space", // optional if /config/plugins.js -> email.settings.defaultFrom is set
          replyTo: "hey@mozart409.space", // optional if /config/plugins.js -> email.settings.defaultReplyTo is set
          attachments: [], // optional array of files
        },
        {
          templateId: 1, // required - you can get the template id from the admin panel (can change on import)
        }
        /* {
          // this object must include all variables you're using in your email template
          USER: {
            firstname: 'John',
            lastname: 'Doe',
          },
          order: {
            products: [
              { name: 'Article 1', price: 9.99 },
              { name: 'Article 2', price: 5.55 },
            ],
          },
          shippingCost: 5,
          total: 20.54,
        } */
      );
    } catch (err) {
      strapi.log.debug("📺: ", err);
      return ctx.badRequest(null, err);
    }

    return entity;
  },
};
