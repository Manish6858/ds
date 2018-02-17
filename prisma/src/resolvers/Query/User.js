module.exports = {
  user(parent, { where }, ctx, info) {
    return ctx.db.query.user(
      {
        where
      },
      info
    );
  }
};
