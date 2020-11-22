console.group("Args:");
process.argv.slice(2).forEach((v, i) => console.log(`${i}:`, v));
console.groupEnd();
