import {
  Application,
  Router,
  RouterContext,
} from "https://deno.land/x/oak/mod.ts";
import * as Flags from "https://deno.land/std@0.66.0/flags/mod.ts";

const DEFAULT_PORT = 8080;
const argPort = Flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)) {
  console.error("Port is not a number.");
  Deno.exit(1);
}

const app = new Application();

const router = new Router();
router
  .get("/", (ctx: RouterContext) => {
    ctx.response.body = "Hello World!";
  })
  .get("/:name", (ctx: RouterContext) => {
    ctx.response.body = `Hello ${ctx.params.name}`;
  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: port });
