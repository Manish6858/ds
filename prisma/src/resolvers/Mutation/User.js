const { rebuild } = require("../Helper");

module.exports = {
  createUser(parent, { data }, ctx, info) {
    const result = ctx.db.mutation.createUser({
      data
    });
    rebuild();
    return result;
  },
  updateUser(parent, { where, data }, ctx, info) {
    const result = ctx.db.mutation.updateUser(
      {
        where,
        data
      },
      info
    );
    rebuild();
    return result;
  },
  deleteUser(parent, { where }, ctx, info) {
    const result = ctx.db.mutation.deleteUser(
      {
        where
      },
      info
    );
    rebuild();
    return result;
  }
};
