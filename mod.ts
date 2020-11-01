import * as pogo from "https://deno.land/x/pogo@v0.5.1/main.ts";

export const createServer = (port: number): pogo.Server => {
  const server = pogo.server({ port });

  server.router.get("/", () => {
    return "Hello, world!";
  });

  server.router.get("/{name}", (request: pogo.Request) => {
    const name: string = request.params["name"];

    return `Hello, ${name}!`;
  });

  return server;
};
