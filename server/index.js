const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const compression = require("compression");
const next = require("next");
const helmet = require("helmet");

const routes = require("../routes");

const port = parseInt(process.env.PORT, 10) || 3030;
const host = process.env.HOST || "127.0.0.1";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.enable("trust proxy");
  console.log("trust proxy:", server.get("trust proxy"));

  server.use(helmet());
  server.use(compression());
  server.use(favicon(path.join(__dirname, "../static", "favicon.ico")));

  const staticPath = path.join(__dirname, "../static");
  server.use(
    "/static",
    express.static(staticPath, {
      maxAge: "30d",
      immutable: true
    })
  );

  server.get("*", (req, res) => {
    return handler(req, res);
  });

  startServer();

  function startServer() {
    server.listen(port, host, () => {
      console.log(`> Ready on ${host}:${port}`);
    });
  }
});
