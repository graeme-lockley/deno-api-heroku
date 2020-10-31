import { assertEquals } from "https://deno.land/std@0.71.0/testing/asserts.ts";
import { greeter } from "./mod.ts";

Deno.test("Greeter", () => {
  assertEquals(greeter("Graeme"), "Hello Graeme");
});
