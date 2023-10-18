#!/usr/bin/env node

const commander = require("commander"); // (normal include)
const shell = require("shelljs");
const info = require("../package.json");

const program = new commander.Command();

function errorColor(str) {
  // Add ANSI escape codes to display text in red.
  return `\x1b[31m${str}\x1b[0m`;
}

function color(str) {
  return `\x1b[36m${str}\x1b[0m`;
}

program.configureOutput({
  // Visibly override write routines as example!
  writeOut: (str) => process.stdout.write(`[OUT] ${str}`),
  writeErr: (str) => process.stdout.write(`[ERR] ${str}`),
  // Output errors in red.
  outputError: (str, write) => write(errorColor(str)),
});

program
  .version(info.version)
  .description(color("clone a repository into a newly created directory"));

program
  .command("e <example>")
  .description("clone a repository into a newly created directory")
  .action((example) => {
    fetch(`https://github.com/rodrigo3d/examples/tree/main/${example}`).then(
      function (response) {
        if (!response.ok) {
          console.log(`Example not found: ${response.status}`);
          shell.exit();
        }
        shell.exec(
          `curl -s https://codeload.github.com/rodrigo3d/examples/tar.gz/main | tar -xz --strip=1 examples-main/${example}`
        );
        console.log(`Example clone as ${example} succefull`);
        shell.exit();
      }
    );
  });

program.parse(process.argv);

// curl https://codeload.github.com/rodrigo3d/take-screenshot/tar.gz/master | tar -xz --strip=2 take-screenshot-master/public

// npx degit https://github.com/ben-rogerson/twin.examples/storybook-styled-components-typescript folder-name
