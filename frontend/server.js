const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const { parse } = require("url");
const routes = require("./routes");

app.prepare().then(() => {
  const server = express();

  server.get("/profile/:key", (request, response) => {
    const key = request.params.key;
    return app.render(request, response, "/profile", { profile: key });
  });

  server.get(
    Object.keys(routes).map(route => route),
    (request, response, next) => {
      const parsedUrl = parse(request.url, true);
      const { pathname, query = {} } = parsedUrl;
      const route = routes[pathname];
      if (route) {
        return app.render(request, response, route.page, {
          ...route.query
        });
      } else {
        next();
      }
    }
  );

  server.get("*", (request, response) => {
    return handle(request, response);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
