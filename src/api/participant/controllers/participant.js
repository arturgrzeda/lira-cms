'use strict';

/**
 * participant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::participant.participant', ({ strapi }) => ({
  async find(ctx) {
    let { data, meta } = await super.find(ctx);
    return { data, meta };
  },
}));
