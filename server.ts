import { serve } from "https://deno.land/std@0.66.0/http/server.ts";
import * as Flags from "https://deno.land/std@0.66.0/flags/mod.ts";
import * as Path from "https://deno.land/std@0.66.0/path/mod.ts";

const DEFAULT_PORT = 8080;
const argPort = Flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)) {
  console.error("Port is not a number.");
  Deno.exit(1);
}

// const s = serve({ port: port });
// console.log("http://localhost:" + port);

// for await (const req of s) {
//   console.log(req);
//   const url = new URL(`http://localhost:${port}${req.url}`);
//   console.log(url);

//   req.respond({ body: "Hello World\n" });
// }

import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: port });
