import { assertEquals } from "https://deno.land/std@0.71.0/testing/asserts.ts";
import { ServerRequest } from "https://deno.land/std@0.64.0/http/server.ts";
import { server } from "./mod.ts";

Deno.test("get /", async () => {
  const request = new ServerRequest();
  request.method = "GET";
  request.url = "/";

  const result = await server.inject(request);

  assertEquals(result.body, "Hello, world!");
});

Deno.test("get /Graeme", async () => {
  const request = new ServerRequest();
  request.method = "GET";
  request.url = "/Graeme";

  const result = await server.inject(request);

  assertEquals(result.body, "Hello, Graeme!");
});
