module.exports = {
  scripts(
    parent,
    { where, orderBy, skip, after, before, first, last },
    ctx,
    info
  ) {
    return ctx.db.query.scripts(
      {
        where,
        orderBy,
        skip,
        after,
        before,
        first,
        last
      },
      info
    );
  }
};
