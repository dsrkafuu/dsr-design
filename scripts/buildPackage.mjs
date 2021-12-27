/**
 * build npm styles package
 * also used as example of tool scripts
 */

import fse from 'fs-extra';
import path from 'path';
import url from 'url';
import glob from 'glob';
import chalk from 'chalk';
import sass from 'sass';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

console.log(chalk.blue('building npm styles package...'));
const workers = [];

// clean output folder
fse.emptyDirSync(path.resolve(__dirname, '../package'));

// copy package.json
const inPackage = fse.readJSONSync(path.resolve(__dirname, '../package.json'));
const outPackage = {};
const neededKeys = [
  'name',
  'version',
  'description',
  'author',
  'license',
  'homepage',
  'repository',
];
for (const key of neededKeys) {
  outPackage[key] = inPackage[key];
}
fse.writeJSONSync(
  path.resolve(__dirname, '../package/package.json'),
  outPackage,
  { spaces: 2 }
);

// build scss
const scssFiles = glob
  .sync('src/package/*.scss')
  .map((file) => path.resolve(__dirname, '../', file));
const scssConfig = {
  sourceMap: false,
  loadPaths: [path.resolve(__dirname, '../node_modules')],
};
scssFiles.forEach((file) => {
  workers.push(
    new Promise((resolve, reject) => {
      try {
        const basename = path.basename(file, '.scss');
        if (basename !== 'variables') {
          const res = sass.compile(file, scssConfig);
          fse.outputFileSync(
            path.resolve(__dirname, `../package/css/${basename}.css`),
            res.css
          );
        }
        resolve();
      } catch (e) {
        reject(e);
      }
    })
  );
});

// copy raw scss
for (const file of scssFiles) {
  const outDir = path.resolve(__dirname, '../package/scss');
  fse.ensureDirSync(outDir);
  fse.copyFileSync(file, path.join(outDir, path.basename(file)));
}

Promise.all(workers)
  .then(() => {
    console.log(
      chalk.green(`package build for ${scssFiles.length} scss files`)
    );
  })
  .catch((e) => {
    console.log(chalk.red('failed to build some of scss files'));
    console.error(e);
    process.exitCode = 1;
  });
