module.exports = {
  exportPathMap: async () => {
    const { request } = require("graphql-request");
    // TODO: Unify graphql-request interface across project

    // TODO: Handle error condition
    const query = `
    query allCards {
      allCards(orderBy: title_ASC) {
        id
        key
        title
        link
      }
      _allCardsMeta {
        count
      }
    }`;
    const cards = await request(
      "https://api.graph.cool/simple/v1/ds",
      query
    ).then(result => {
      return result.allCards.map(card => card);
    });

    const pages = cards.reduce((pages, card) => {
      const page = {
        [`/profile/${card.key}`]: {
          page: "/profile",
          query: { card }
        }
      };
      return { ...pages, ...page };
    }, {});

    return {
      "/": { page: "/" },
      "/resume": { page: "/resume" },
      ...pages
    };
  }
};
