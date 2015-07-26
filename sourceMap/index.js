var mapped = [1, 2, 3, 4, 5].map(function (n) { return n / 5; });
mapped.forEach(function (m) { return console.log(m); });
mapped.forEach(console.log.bind(console));
//# sourceMappingURL=index.js.map