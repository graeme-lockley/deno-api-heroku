export const greet = (name: string | undefined = undefined) =>
  name === undefined || name === "" ? "Hello world" : `Hello ${name}`;
