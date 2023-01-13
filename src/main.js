async function importFromHostRepo(hostRepoPath) {
  return await import(`${process.cwd()}/${hostRepoPath}`);
}

console.log(process.env);
const exports = await importFromHostRepo(
  ".github/speedcurve-patching/patch-transaction.js"
);
console.log("Hello World!", exports);
