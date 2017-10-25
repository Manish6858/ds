module.exports = {
  exportPathMap: async () => {
    const Lokka = require("lokka").Lokka;
    const Transport = require("lokka-transport-http").Transport;

    const client = new Lokka({
      transport: new Transport("https://api.graph.cool/simple/v1/ds")
    });

    const cards = await client
      .query(
        `
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
          }`
      )
      .then(result => {
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
      ...pages
    };
  }
};
