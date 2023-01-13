const exports = await import(
  `${process.cwd()}/.github/workflows/speedcurve-patching/patch-transaction`
);
console.log("Hello World!", exports);
