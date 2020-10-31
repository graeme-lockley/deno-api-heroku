import pogo from "https://deno.land/x/pogo@v0.5.1/main.ts";

export const server = pogo.server({ port: 3000 });

server.router.get("/", (request) => {
  return "Hello, world!";
});

// server.start();
server.router.get("/{name}", (request) => {
  const name: string = request.params["name"];

  return `Hello, ${name}!`;
});

// server.start();
