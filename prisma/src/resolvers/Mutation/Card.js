const { rebuild } = require("../Helper");

module.exports = {
  createCard(parent, { data }, ctx, info) {
    const result = ctx.db.mutation.createCard(
      {
        data
      },
      info
    );
    rebuild();
    return result;
  },
  updateCard(parent, { where, data }, ctx, info) {
    const result = ctx.db.mutation.updateCard(
      {
        where,
        data
      },
      info
    );
    rebuild();
    return result;
  },
  deleteCard(parent, { where }, ctx, info) {
    const result = ctx.db.mutation.deleteCard(
      {
        where
      },
      info
    );
    rebuild();
    return result;
  }
};
