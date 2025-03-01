const { writeFile } = require('node:fs/promises');
const semver = require('semver');

async function getReactLatest() {
  const url = 'https://registry.npmjs.org/react/latest';
  const r = await fetch(url);
  const res = await r.json();

  return res.version;
}

async function getPreBuild() {
  const url = 'https://registry.npmjs.org/@xiaochuan-dev/react-umd-build/latest'
  const r = await fetch(url);
  const res = await r.json();

  return res.build;
}

async function start() {
  const latestReactVersion = await getReactLatest();
  const preBuildVersion = await getPreBuild();
  if (latestReactVersion !== preBuildVersion) {
    const curPkg = require('./package.json');

    const newVersion = semver.inc(curPkg.version, 'patch');

    const newPkg = {
      ...curPkg,
      build: latestReactVersion,
      version: newVersion
    };

    await writeFile('./package.json', JSON.stringify(newPkg), 'utf-8');
    console.log(`v${latestReactVersion}`);
  }
}

start();
