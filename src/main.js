const exports = await import(
  `${process.env.GITHUB_WORKSPACE}/.github/workflows/speedcurve-patching/patch-transaction`
);
console.log("Hello World!", exports);
