/* tslint:disable */
// @ts-nocheck
const { writeFile, existsSync, mkdirSync } = require("fs");
const { argv } = require("yargs");

require("dotenv").config();
const environment = argv.environment;

function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(`wrote variables to ${targetPath}`);
    }
  });
}

// Providing path to the `environments` directory
const envDirectory = './src/environments';

// creates the `environments` directory if it does not exists
if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

// create the `enviroments.prod.ts` and `environment.ts` file if it does not exists
if (!existsSync(`${envDirectory}/environment.prod.ts`)) {
  writeFileUsingFS(`${envDirectory}/environment.prod.ts`, '');
}
if (!existsSync(`${envDirectory}/environment.ts`)) {
  writeFileUsingFS(`${envDirectory}/environment.ts`, '');
}

// Check wheter command line argument of `prod` was provided signifying production mode
const isProduction = environment === 'prod';

// choose the correct targetPath based on the environment chosen
const targetPath = `${envDirectory}/environment${isProduction ? '.prod' : ''}.ts`;

// actual content to be complied dynamically and pasted into respective environment files
const environmentFileContent = `
export const environment = {
  production: ${isProduction},
  YOUTUBE_API_KEY: "${process.env.YOUTUBE_API_KEY}",
  YOUTUBE_API_URL: "https://www.googleapis.com/youtube/v3/search",
};
`;

writeFileUsingFS(targetPath, environmentFileContent);

/* tslint:enable */