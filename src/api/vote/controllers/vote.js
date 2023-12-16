'use strict';

/**
 * vote controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::vote.vote", ({ strapi }) => ({
  async find(ctx) {
    let { data, meta } = await super.find(ctx);

    if (ctx.state.user && ctx.state.user.role && ctx.state.user.role.type === 'jury') {
      data = data.filter(item => ctx.state.user.id === item.attributes.voter.data.id);
    }

    return { data, meta };
  },
}));
