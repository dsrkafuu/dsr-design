/**
 * generate package data
 */

import fse from 'fs-extra';
import path from 'path';
import url from 'url';
import chalk from 'chalk';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

console.log(chalk.blue('generating package data...'));
const workers = [];

// clean output folder
fse.emptyDirSync(path.resolve(__dirname, '../package'));

// create package.json
const inPackage = fse.readJSONSync(path.resolve(__dirname, '../package.json'));
const outPackage = {};
const neededKeys = [
  'publishConfig',
  'name',
  'version',
  'description',
  'author',
  'license',
  'homepage',
  'repository',
  'peerDependencies',
];
for (const key of neededKeys) {
  outPackage[key] = inPackage[key];
}

// ts lib related
outPackage.type = 'module';
outPackage.main = './lib/index.js';
outPackage.types = './lib/index.d.ts';

// write package.json
fse.writeJSONSync(
  path.resolve(__dirname, '../package/package.json'),
  outPackage,
  { spaces: 2 }
);

// copy readme
fse.copyFileSync(
  path.resolve(__dirname, '../README.md'),
  path.resolve(__dirname, '../package/README.md')
);

Promise.all(workers)
  .then(() => {
    console.log(chalk.green(`package data generated`));
  })
  .catch((e) => {
    console.log(chalk.red('failed to generate package data'));
    console.error(e);
    process.exitCode = 1;
  });
