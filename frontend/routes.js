const staticRoutes = {
  "/": { page: "/" }
};

const adminRoutes = {
  "/admin": {
    page: "/",
    query: {
      editing: true
    }
  }
};

module.exports = {
  ...staticRoutes,
  ...adminRoutes
};
