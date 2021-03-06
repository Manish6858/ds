const routes = require("./routes");

module.exports = {
  exportPathMap: async () => {
    const { request } = require("graphql-request");
    // TODO: Unify graphql-request interface across project

    // TODO: Handle error condition
    const query = `
    query AllCardsForBuild {
      cards(orderBy: title_ASC) {
        id
        slug
        title
        link
        html
      }
    }`;
    const cards = await request("https://api.divyendusingh.com", query).then(
      result => {
        return result.cards.map(card => card);
      }
    );

    const pages = cards.reduce((pages, card) => {
      const page = {
        [`/profile/${card.slug}`]: {
          page: "/profile",
          query: { card }
        }
      };
      return { ...pages, ...page };
    }, {});

    return {
      ...routes,
      ...pages,
      "/resume": { page: "/resume" }
    };
  }
};
