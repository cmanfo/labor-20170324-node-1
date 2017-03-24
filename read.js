const fs = require ('fs');

fs.readFile('./readme.md', (err, contents) => {
  if (err) {
    console.error(err);

    return;
  }
  console.log(contents.toString('utf-8'));
});
