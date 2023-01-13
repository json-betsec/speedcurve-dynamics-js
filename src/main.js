console.log(process.env);
const exports = await import(
  `${process.env.GITHUB_WORKSPACE}/.github/speedcurve-patching/patch-transaction`
);
console.log("Hello World!", exports);
