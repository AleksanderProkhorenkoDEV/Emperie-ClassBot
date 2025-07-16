//In render web service i need give a port to check the bot is available

import { createServer } from "http";

export function startHealthCheckServer(port: number = 3000) {
  return createServer((req, res) => {
    res.writeHead(200);
    res.end();
  }).listen(port);
}
