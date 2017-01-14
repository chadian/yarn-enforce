#!/usr/bin/env node

// Implementation from:
// https://www.reddit.com/r/javascript/comments/5glcow/yarn_how_can_you_prevent_developers_from/dat8lrc/
'use strict';

// Detect if run by NPM and fail
if (process.env.npm_lifecycle_script) {
  console.log('' +
    'This project uses yarn (https://yarnpkg.com/) for package management instead of npm.\n' +
    '\n' +
    'Basics:\n' +
    '# see yarnpkg.com for installation of yarn\n' +
    '$ yarn install\n' +
    '\n' +
    'To install a new package (adds to package.json):\n' +
    '$ yarn add [packagename]\n' +
    '\n' +
    'To upgrade a package:\n' +
    '$ yarn upgrade [packagename]\n' +
    '\n' +
    'For more help, see https://yarnpkg.com/en/docs/usage, or open an issue for `yarn-enforce`'
  );

  process.exit(1);
}
