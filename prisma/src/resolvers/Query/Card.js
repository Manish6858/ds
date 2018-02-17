module.exports = {
  cards(
    parent,
    { where, orderBy, skip, after, before, first, last },
    ctx,
    info
  ) {
    return ctx.db.query.cards(
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
