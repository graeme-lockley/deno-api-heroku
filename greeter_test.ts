import { assertEquals } from "https://deno.land/std@0.73.0/testing/asserts.ts";

import { greet } from "./greeter.ts";

Deno.test("greet", () => {
  assertEquals(greet(), "Hello world");
  assertEquals(greet(undefined), "Hello world");
  assertEquals(greet(""), "Hello world");
  assertEquals(greet("x"), "Hello x");
  assertEquals(greet("Fred"), "Hello Fred");
});
