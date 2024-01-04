#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectName = process.argv[2];
const repoURL = 'https://github.com/TABASCOatw/particle-mantle-demo.git';

if (!projectName) {
    console.error('Please specify the project directory:');
    console.error('    npx particle-mantle-demo <project-directory>');
    process.exit(1);
}

const projectPath = path.resolve(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
    console.error(`The directory ${projectName} already exists. Please use a new directory name.`);
    process.exit(1);
}

try {
    execSync(`git clone ${repoURL} "${projectPath}"`);

    console.log('Installing dependencies... This might take a few minutes.\n');
    execSync(`cd "${projectPath}" && yarn install --ignore-engines`);

    console.log(`\nMantle demo created successfully in ${projectName}`);
    console.log('You can now run the following commands:');
    console.log(`    cd ${projectName}`);
    console.log('    yarn dev');
    console.log('Although ensure you populate REACT_APP_PROJECT_ID, REACT_APP_CLIENT_KEY, and REACT_APP_APP_ID');
    console.log('\nHappy coding!\n===============================================');
} catch (error) {
    console.error('Error occurred:', error.message);
    process.exit(1);
}

