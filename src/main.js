console.log(process.env);
const exports = await import(
  `${process.cwd()}/.github/speedcurve-patching/patch-transaction.js`
);
console.log("Hello World!", exports);
