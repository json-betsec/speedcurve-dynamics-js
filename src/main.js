console.log(process.env);
const exports = await import(
  `${process.cwd()}/.github/speedcurve-patching/patch-transaction`
);
console.log("Hello World!", exports);
