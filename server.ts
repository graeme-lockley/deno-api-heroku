import { createServer } from "./mod.ts";
import * as Flags from "https://deno.land/std@0.76.0/flags/mod.ts";

export const DEFAULT_PORT = 3000;

const argPort = Flags.parse(Deno.args).port;

export const server = createServer(argPort ? Number(argPort) : DEFAULT_PORT);

server.start();
