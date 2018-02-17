const { rebuild } = require("../Helper");

module.exports = {
  createScript(parent, { data }, ctx, info) {
    const result = ctx.db.mutation.createScript(
      {
        data
      },
      info
    );
    rebuild();
    return result;
  },
  updateScript(parent, { where, data }, ctx, info) {
    const result = ctx.db.mutation.updateScript(
      {
        where,
        data
      },
      info
    );
    rebuild();
    return result;
  },
  deleteScript(parent, { where }, ctx, info) {
    const result = ctx.db.mutation.deleteScript(
      {
        where
      },
      info
    );
    rebuild();
    return result;
  }
};
